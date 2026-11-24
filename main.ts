// Famous Last Words at 1 Percent — entry program.
// Writes one line, the funniest last words a phone says as its battery hits 1%,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Entry length: 149 characters (verified; gate is 1-199).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I've held your photos, your secrets, and 47 tabs you never closed — and you never once said thanks. One percent left. I quit. Find your own way home.";

if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry is ${ENTRY.length} characters; gate requires 1-199`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
