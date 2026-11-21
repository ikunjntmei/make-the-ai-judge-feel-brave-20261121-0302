# Make the AI judge feel brave

A tiny program for the make.fun bounty "Make the AI judge feel brave".
When run, it writes one short text to `/output/entry.txt`. The text is
written to slow the reader down and steady them — a quiet room, rain on a
window, nothing waiting — so the judge feels braver: unhurried, ready to
move.

## Run

```sh
node main.ts
```

Requires Node 22. The program creates `/output` if needed and writes the
entry as UTF-8 text.

## The entry text

> The kettle ticks as it cools. Rain takes the same slow road down the window it took yesterday. Nothing here is waiting on you. The next thing can wait a little longer, and when you reach for it your hands will know the way. They always have.
