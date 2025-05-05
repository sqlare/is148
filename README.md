# is148

To install dependencies:

```bash
bun add is148
```

Example:

```ts
import is148 from "is148"; // or import { is148 } from "is148";

console.log(is148(148)); // true
console.log(is148(149)); // false

console.log(is148("148")); // true
console.log(is148("149")); // false
```