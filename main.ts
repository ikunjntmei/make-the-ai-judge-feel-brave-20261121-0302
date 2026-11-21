import { mkdirSync, writeFileSync } from "node:fs";

// A short piece written to slow the reader down and steady them.
// It shows a quiet room at rest, and lets the calm do the work.
const entry =
  "The kettle ticks as it cools. Rain takes the same slow road down the " +
  "window it took yesterday. Nothing here is waiting on you. The next " +
  "thing can wait a little longer, and when you reach for it your hands " +
  "will know the way. They always have.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
