import { Cron } from 'croner';
import { css, html, js } from 'js-beautify';

const b = 'https://webtiles.kicya.net/'
const t = 't/webtiles.kicya.net/'

const FILE_URLS = [
	b,
  b + 's/dist/game.js',
  b + 's/dist/embed.js',
  b + 's/js/lib/interpreter.js',
  b + 's/css/main.css',
	b + t + 'index.html',
	b + t + 'rules.html',
	b + t + 'js.html',
	b + t + 'html.html',
  b + 'e/webtiles.kicya.net'
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

// Strip hash comment depending on file type
function stripHashComment(path, content) {
  if (path.endsWith('.html')) {
    return content.replace(/^<!-- [a-f0-9]{64} -->\n?/, '');
  } else {
    return content.replace(/^\/\* [a-f0-9]{64} \*\/\n?/, '');
  }
}

// Generate hash comment depending on file type
function getHashComment(path, hash) {
  if (path.endsWith('.html')) return `<!-- ${hash} -->\n`;
  return `/* ${hash} */\n`;
}

async function putRepoFile(env, path, content, sha) {
  const parser = getParser(path);
  let formattedContent = parser ? parser(content, { indent_size: 2 }) : content;

  // Remove existing hash comment before computing hash
  const contentWithoutHash = stripHashComment(path, formattedContent);
  const newHash = await computeHash(contentWithoutHash);

  // Prepend hash comment
  formattedContent = getHashComment(path, newHash) + contentWithoutHash;

  // Skip update if hash matches existing file
  if (sha) {
    const existingFile = await getRepoFile(env, path);
    if (existingFile) {
      const existingContent = atob(existingFile.content);
      const existingHashMatch = existingContent.match(path.endsWith('.html')
        ? /^<!-- ([a-f0-9]{64}) -->/
        : /^\/\* ([a-f0-9]{64}) \*\//);
      if (existingHashMatch && existingHashMatch[1] === newHash) {
        console.log(`${path} unchanged (hash matched)`);
        return;
      }
    }
  }

  const body = {
    message: `[${Date.now()}] ${path}`,
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
		console.log(path + ' doesnt exist lol')
    return
  }

  console.log(`${path} updated (hash: ${newHash})`);
}

new Cron('*/30 * * * * *', async () => {
  for (let url of FILE_URLS) {
    let pathname = new URL(url).pathname.replace(/^\/+/, '');
    // Treat paths ending with / as index.html
    if (pathname.endsWith('/') || pathname.length === 0) pathname += 'index.html';
    const path = pathname;

    console.log(path)
    const fileRes = await fetch(url, { headers: {
      Referer: 'https://webtiles.kicya.net/'
    } });
    if (!fileRes.ok) {

      console.error(`Failed to fetch ${url}`, fileRes.status, await fileRes.text());
      continue;
    }

    const content = await fileRes.text();
    const existing = await getRepoFile(process.env, path);
    await putRepoFile(process.env, path, content, existing?.sha);
  }
})

export default {
  async fetch() {
    return new Response('OK');
  },
};

