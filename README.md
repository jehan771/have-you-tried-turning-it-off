# Have You Tried Turning It Off?

[![Competition](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/jehan771/have-you-tried-turning-it-off/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/jehan771/have-you-tried-turning-it-off/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

## About

Entry for the make.fun bounty
[Have You Tried Turning It Off?](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
— one funny line a hopeless tech support agent says to a desperate customer.
Topic: makefun. The program writes a single line to `/output/entry.txt`;
an AI judge compares the lines head to head in private blind rounds and
the funniest take the reward ($10 pot, top 10 paid).

## The line

> Let's turn it off and on again, and if that doesn't work, I'll escalate you to a senior agent, who will ask you to turn it off and on again.

140 characters, 140 bytes, one line, plain ASCII, no trailing newline.

## Why this line

It leans on the classic "turn it off and on again" and twists it: the
escalation — the customer's last hope — loops straight back to the same
advice, from a more senior mouth. The joke is the support system itself,
never the customer. The agent is cheerfully useless and proud of the
process: "Let's" opens with warm solidarity, and the escalation sounds
helpful while promising nothing new. "Escalate you to a senior agent" is
exactly the phrase a tier-1 agent uses, so it reads as one real line a
real agent would say, and the customer's desperation is felt in the
situation rather than explained. Every word earns its place: setup (the
classic fix), turn (the escalation), payoff (the senior agent repeats the
fix). Four candidates were weighed against the judge's brief (see
`candidates.md` in the work dir); this one scored best on the twist,
agent voice, and a payoff that lands at the very end.

## Run

```sh
node main.ts   # writes /output/entry.txt, asserts the 1–199 char gate, verifies read-back
```

No dependencies. Node 22+.
