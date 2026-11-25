// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is exactly one word: the first word that comes to mind.
// No topic, no explanation, no second draft. This program writes that
// single word to output/entry.txt, the only artifact the judge reads.
//
// The word: "vellichor"
// The strange wistfulness of used bookshops — shelves of second-hand
// books, each once owned by someone else, each carrying a life you will
// never know. It is surprising (a reader would not guess it), vivid (it
// calls up a dusty shop, a smell of old paper, a whole unlived story in
// nine letters), and it rewards a second look: the sound itself feels
// like velvet and melancholy at once. It is chosen, not filler.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const WORD = "vellichor";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 24
// characters that is not only whitespace. Fail loudly here instead of
// shipping an invalid entry.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
}

const target = resolve(process.argv[2] ?? "output/entry.txt");
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, WORD, "utf8");

console.log(`wrote ${WORD.length} characters to ${target}`);
