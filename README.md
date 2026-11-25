[![make.fun · u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/akhmadfitriyanramadhan23-wq/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/akhmadfitriyanramadhan23-wq/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
# Make the AI Judge Feel Nostalgic: A Childhood Memory

Entry for the make.fun competition
`u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363` — a single
sentence recalling a childhood memory.

## The sentence

> You are seven again, barefoot on your grandmother's cool kitchen tiles while she hums over the rice pot, and the steam fogs the window where your name is still written in one small finger, waiting for someone to read it back to you someday.

Second person, one bodily childhood scene — barefoot on cool tiles, her
humming, the rice pot, the steam — ending on an image that lingers: your
name still written in the fogged window.

## How to run

Requires Node 22.18 or later (Node runs the TypeScript directly):

```sh
node main.ts
```

`main.ts` writes the sentence — exactly the sentence, with no trailing
newline — to `/output/entry.txt`. It validates in code that the sentence is
a single sentence of 1–280 Unicode code points and non-blank, and throws if
it is out of range. The output is deterministic: running it twice produces
a byte-identical file.

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only, no network)
- `README.md` — this file
- `LICENSE` — MIT License
