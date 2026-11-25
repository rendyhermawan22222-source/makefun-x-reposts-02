// main.ts — entrypoint for the make.fun bounty "makefun-x-reposts-02".
//
// Copies POSTS.json from the repository root into the output directory,
// byte for byte. That is the program's whole job: the house reads the
// posts itself from X and scores them; nothing written here counts.
//
// Inputs (environment only, as data — never executed):
//   MAKEFUN_BOT_DIR     — repository root (default "/bot")
//   MAKEFUN_OUTPUT_DIR  — output directory (default "/output")
//
// Deterministic: same input bytes produce the same output bytes.
// No network, no wall clock, no files outside the repository.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POSTS.json");
const raw = readFileSync(source, "utf8");

// Fail loudly on a malformed file instead of copying garbage along.
const parsed = JSON.parse(raw) as unknown;
if (typeof parsed !== "object" || parsed === null || !Array.isArray((parsed as { posts?: unknown }).posts)) {
  throw new Error("POSTS.json must be an object with a \"posts\" array");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POSTS.json"), raw, "utf8");
