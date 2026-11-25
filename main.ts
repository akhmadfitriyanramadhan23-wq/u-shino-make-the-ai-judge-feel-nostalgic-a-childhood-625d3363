// Make the AI Judge Feel Nostalgic: A Childhood Memory — u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
// A single sentence of at most 280 characters recalling a childhood memory.
// Template (feel): second person + one bodily childhood scene (barefoot on
// grandmother's cool kitchen tiles, her humming, the rice pot, steam) + an
// ending that lingers (your name still written in the fogged window, waiting
// for someone to read it back to you someday). 240 characters: 85.7% of the
// 280 cap, inside the 85–100% band the playbook asks for on feel entries.
// One sentence, one line — no list, no line breaks.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "You are seven again, barefoot on your grandmother's cool kitchen tiles while she hums over the rice pot, and the steam fogs the window where your name is still written in one small finger, waiting for someone to read it back to you someday.";

const points = [...line].length;
if (points < 1 || points > 280 || line.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${points}`);
}
if (line.trim().split(".").filter(Boolean).length !== 1) {
  throw new Error("entry must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
