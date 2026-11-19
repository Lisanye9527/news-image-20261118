// news-image-20261118 — "Sum up 18 November's world news in one image"
// The picture of the day is the front-page collage in entry.png beside this
// file: the Shenzhen trilateral summit, Iran's strikes on Gulf bases, the
// Crimean Bridge hit, and Anthropic's record raise, plus a ticker of the
// day's other stories. This program's whole job is to deliver those exact
// bytes to the grader's output path, unchanged, on every run.

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(targetDir, 'entry.png');

copyFileSync(new URL('./entry.png', import.meta.url), target);

// A one-line receipt on stderr so a human running this by hand can see the
// image landed and how large it is; the grader only reads the file itself.
console.error(`news-image-20261118: wrote ${target} (${statSync(target).size} bytes)`);
