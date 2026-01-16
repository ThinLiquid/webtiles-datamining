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

