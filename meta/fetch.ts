// fetch-files.ts
import { mkdir, rm, writeFile, access } from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const FILE_URLS = [
  "https://webtiles.kicya.net/s/dist/game.js",
  "https://webtiles.kicya.net/s/dist/embed.js",
  "https://webtiles.kicya.net/s/js/lib/interpreter.js",
  "https://webtiles.kicya.net/s/css/main.css",
];

const DEST_DIR = "src";

// Fetch file using native fetch
async function fetchFile(url: string, destPath: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const data = new Uint8Array(await res.arrayBuffer());
  await writeFile(destPath, data);
}

// Ensure clean directory
async function prepareDir() {
  try {
    await access(DEST_DIR);
    await rm(DEST_DIR, { recursive: true, force: true });
  } catch {
    // Directory does not exist, nothing to remove
  }
  await mkdir(DEST_DIR, { recursive: true });
}

async function main() {
  console.log("Starting fetch...");

  await prepareDir();

  for (const url of FILE_URLS) {
    const filename = path.basename(url);
    const destPath = path.join(DEST_DIR, filename);

    console.log(`Fetching ${url} -> ${destPath}`);
    await fetchFile(url, destPath);

    console.log(`Formatting ${filename} with Prettier...`);
    await execAsync(`prettier --write "${destPath}" --print-width 100 --tab-width 2`);
  }

  // Git commit & push
  await execAsync(`git config user.name "github-actions[bot]"`);
  await execAsync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  await execAsync(`git add "${DEST_DIR}"`);
  const timestamp = new Date().toUTCString();
  try {
    await execAsync(`git commit -m "${timestamp}"`);
  } catch {
    console.log("No changes to commit");
  }
  await execAsync(`git push origin HEAD`);

  console.log("Done!");
}

// Run every 30 seconds
setInterval(() => main().catch(console.error), 30_000);

// Run immediately
main().catch(console.error);
