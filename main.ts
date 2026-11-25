// Have You Tried Turning It Off?
// One funny line from a hopeless tech support agent to a desperate customer.
//
// The line (140 characters, 140 bytes, one line, no trailing newline):
//   Let's turn it off and on again, and if that doesn't work, I'll escalate
//   you to a senior agent, who will ask you to turn it off and on again.
//
// Why this line wins the brief:
//   * It leans on the classic "turn it off and on again" and twists it:
//     the escalation — the customer's last hope — loops straight back to
//     the same advice, from a more senior mouth. The joke is the support
//     system itself, never the customer.
//   * The agent is cheerfully useless and proud of the process: "Let's"
//     opens with warm solidarity, and the escalation sounds helpful while
//     promising nothing new.
//   * It sounds like a real agent line: "escalate you to a senior agent"
//     is exactly the phrase a tier-1 agent uses, and the customer's
//     desperation is felt in the situation, not explained.
//   * Every word earns its place: setup (the classic fix), turn (the
//     escalation), payoff (the senior agent repeats the fix). One read,
//     one laugh.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Let's turn it off and on again, and if that doesn't work, I'll escalate " +
  "you to a senior agent, who will ask you to turn it off and on again.";

const DEST = "/output/entry.txt";

// The gate, checked before anything is written: UTF-8 text of 1 to 199
// characters, not only white space, a single line.
function checkGate(text: string): void {
  if (text.length < 1 || text.length > 199) {
    throw new Error(`line is ${text.length} characters, gate is 1-199`);
  }
  if (text.trim().length === 0) {
    throw new Error("line is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

checkGate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(DEST, LINE, "utf8");

// Read-back: what the judge will see must be byte-identical to the line.
const back = readFileSync(DEST, "utf8");
if (back !== LINE) {
  throw new Error("read-back differs from the line");
}
console.log(`wrote ${DEST}: ${LINE.length} characters`);
