// Fortune in a Pot — a single houseplant fortune, written to /output/entry.txt.
// The fortune must be one line, 1-120 characters, kind and funny, and clearly
// about the plant on the windowsill: the sun, the sill and the cat are all
// this plant's own little world.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "By spring, the sun will cross the windowsill just to reach you, and the cat will pretend it always believed in you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);
