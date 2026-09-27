import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const host = process.env.INDEXNOW_HOST || "www.yeagr.com";
const sitemapUrl = process.env.SITEMAP_URL || `https://${host}/sitemap.xml`;
const keyFileName =
  process.env.INDEXNOW_KEY_FILE || "901c8e7e8947bf688276829856cc3fa1.txt";
const keyPath = path.join(root, "public", keyFileName);
const key = (process.env.INDEXNOW_KEY || (await readFile(keyPath, "utf8"))).trim();
const keyLocation =
  process.env.INDEXNOW_KEY_LOCATION || `https://${host}/${keyFileName}`;
const endpoints = (
  process.env.INDEXNOW_ENDPOINTS ||
  "https://www.bing.com/indexnow,https://api.indexnow.org/indexnow"
)
  .split(",")
  .map((endpoint) => endpoint.trim())
  .filter(Boolean);

async function getSitemapUrls() {
  const response = await fetch(sitemapUrl, {
    headers: { accept: "application/xml,text/xml,*/*" },
  });

  if (!response.ok) {
    throw new Error(`Could not fetch sitemap ${sitemapUrl}: ${response.status}`);
  }

  const sitemap = await response.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].trim(),
  );

  return [...new Set(urls.filter((url) => url.startsWith(`https://${host}`)))];
}

async function submit(endpoint, urlList) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  const body = await response.text();

  return {
    endpoint,
    status: response.status,
    ok: response.ok || response.status === 202,
    body,
  };
}

const urls = await getSitemapUrls();

if (urls.length === 0) {
  throw new Error(`No ${host} URLs found in ${sitemapUrl}`);
}

console.log(`Submitting ${urls.length} URLs from ${sitemapUrl}`);

const results = await Promise.all(endpoints.map((endpoint) => submit(endpoint, urls)));

for (const result of results) {
  console.log(`${result.endpoint}: ${result.status}${result.ok ? " OK" : " ERROR"}`);
  if (result.body) {
    console.log(result.body);
  }
}

if (results.some((result) => !result.ok)) {
  process.exitCode = 1;
}
