# obelus

Minimal TypeScript library starter (ESM) for publishing to npm.

## Scripts

- `npm run build`: compile TypeScript to `dist/`
- `npm run dev`: watch build (recompiles on change)

## Install / usage

```ts
import { hello } from "obelus";

console.log(hello({ name: "npm" }));
```
