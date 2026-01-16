import { css, html, js } from 'js-beautify';

const FILE_URLS = [
  'https://webtiles.kicya.net/s/dist/game.js',
  'https://webtiles.kicya.net/s/dist/embed.js',
  'https://webtiles.kicya.net/s/js/lib/interpreter.js',
  'https://webtiles.kicya.net/s/css/main.css',
];

const GITHUB_OWNER = 'ThinLiquid';
const GITHUB_REPO = 'webtiles-datamining';
const BRANCH = 'main';

function githubHeaders(env) {
  return {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'cf-worker-sync',
  };
}

async function getRepoFile(env, path) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${BRANCH}`;
  const res = await fetch(url, { headers: githubHeaders(env) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

function getParser(filename) {
  if (typeof filename !== "string") return null;
  const extMatch = filename.match(/\.(\w+)$/);
  if (!extMatch) return null;
  const ext = extMatch[1].toLowerCase();
  const parserMap = { js, html, css };
  return parserMap[ext] || null;
}

function toBase64(txt) {
  return btoa(new TextEncoder().encode(txt).reduce((data, byte) => data + String.fromCharCode(byte), ''));
}

async function computeHash(str) {
  const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function stripHashComment(path, content) {
  // Remove existing top /* ... */ comment
  return content.replace(/^\/\* [a-f0-9]{64} \*\/\n/, '');
}

async function putRepoFile(env, path, content, sha) {
  const parser = getParser(path);
  let formattedContent = parser ? parser(content, { indent_size: 2 }) : content;

  // Remove existing hash comment before computing hash
  const contentWithoutHash = stripHashComment(path, formattedContent);
  const newHash = await computeHash(contentWithoutHash);

  // Prepend hash comment
  formattedContent = `/* ${newHash} */\n${contentWithoutHash}`;

  // Skip update if hash matches existing file
  if (sha) {
    const existingFile = await getRepoFile(env, path);
    if (existingFile) {
      const existingContent = atob(existingFile.content);
      const existingHashMatch = existingContent.match(/^\/\* ([a-f0-9]{64}) \*\//);
      if (existingHashMatch && existingHashMatch[1] === newHash) {
        console.log(`${path} unchanged (hash matched)`);
        return;
      }
    }
  }

  const body = {
    message: `Update ${path} (hash: ${newHash})`,
    content: toBase64(formattedContent),
    branch: BRANCH,
    ...(sha && { sha }),
  };

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        ...githubHeaders(env),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }

  console.log(`${path} updated (hash: ${newHash})`);
}

export default {
  async scheduled(event, env, ctx) {
    for (const url of FILE_URLS) {
      const path = new URL(url).pathname.replace(/^\/+/, '');
      const fileRes = await fetch(url);
      if (!fileRes.ok) {
        console.error(`Failed to fetch ${url}`);
        continue;
      }
      const content = await fileRes.text();
      const existing = await getRepoFile(env, path);
      await putRepoFile(env, path, content, existing?.sha);
    }
  },

  async fetch() {
    return new Response('OK');
  },
};

