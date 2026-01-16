// fetch-files.ts
import { exec } from "child_process";
import { promisify } from "util";
import { mkdir, rm, writeFile, access } from "fs/promises";
import path from "path";
import https from "https";

const execAsync = promisify(exec);

// URLs to fetch
const FILE_URLS = [
  "https://webtiles.kicya.net/s/dist/game.js",
  "https://webtiles.kicya.net/s/dist/embed.js",
  "https://webtiles.kicya.net/s/js/lib/interpreter.js",
  "https://webtiles.kicya.net/s/css/main.css",
];

const DEST_DIR = "src";

// Helper to fetch a file from a URL
async function fetchFile(url: string, destPath: string) {
  return new Promise<void>((resolve, reject) => {
    const file = writeFile(destPath, ""); // just to reserve the path
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
          return;
        }
        const data: Uint8Array[] = [];
        res.on("data", (chunk) => data.push(chunk));
        res.on("end", async () => {
          try {
            await writeFile(destPath, Buffer.concat(data));
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", reject);
  });
}

// Ensure clean destination directory
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

  // Git commit
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

setInterval(() => main(), 30 * 1000)
