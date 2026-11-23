// Entry for the-joke-about-the-demo-20261123-0112.
// Writes a single one-line joke about working beside AI coding agents
// to entry.txt in the output directory. Deterministic, no network,
// no clock, no randomness — same run, same bytes, every time.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory relative to this script file, never
// relative to the process working directory. The grader may run the
// program from any cwd; the entry must still land in the right place.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// The joke: one line, self-contained, 1-280 Unicode code points.
// Angle: the agent declares victory while the mess is still everywhere.
const joke =
  'My AI coding agent says "Done!" like a toddler shouting "All clean!" — standing in the middle of the mess, still holding the hose.';

// Guard the competition's length rule before writing anything.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Joke must be 1-280 code points, got ${codePoints}.`);
}
if (joke.trim().length === 0) {
  throw new Error("Joke must not be only whitespace.");
}

// Create the output directory if needed, then write the joke as UTF-8
// with a single trailing newline. The file contains exactly one line.
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, joke + "\n", "utf8");
