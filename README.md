# ms-to-frames

A simple way to turn milliseconds into frames (if that is something you need done)

Tested with 25, 30, 50, 60 (but will likely work for all other variations).

## Install

```bash
npm install ms-to-frames
```

## Usage

```js
const msToFrames = require("ms-to-frames");

// Convert 1000ms to frames at 25fps
msToFrames.convert(1000, 25);
// -> 25

// Convert 156200ms to frames at 30fps
msToFrames.convert(1000, 25);
// -> 4686
```
