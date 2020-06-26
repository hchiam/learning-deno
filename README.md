# Learning Deno

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://en.wikipedia.org/wiki/Deno_(software)>

## Motivation (vs Node.js)

<https://medium.com/javascript-in-plain-english/deno-vs-node-js-here-are-the-most-important-differences-62b547443be1>

Basically more secure by default, requiring you to explicitly specify what you want/allow access to. Instead of `npm` and `node_modules`, you can get deps from `https` URLs (e.g.: `import * as log from "https://deno.land/std/log/mod.ts";`). Typescript support out of the box.

## Install steps

<https://deno.land>

Then get updates with `deno upgrade`.

## More

<https://deno.land/manual>

```bash
deno run https://deno.land/std/examples/welcome.ts
```

or:

```js
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({ port: 8000 });
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

(You can try this ^ with `deno run demo.ts` and then `deno run --allow-net demo.ts`)

The last example uses <https://deno.land/std@0.50.0/http/server.ts>

## File reading example

```js
const { stdout, open, copy, args } = Deno;

for (let i = 0; i < args.length; i++) {
  const filename = args[i]; // args = CLI arguments
  const file = await open(filename);
  console.log();
  await copy(file, stdout); // zero-copy async copy: file -> stdout
  console.log();
}
```

`deno run --allow-read cat.ts myfile.txt`

## Set up hot reload

<https://deno.land/x/denon>

Once:

```bash
deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts
```

Then:

```bash
denon run --allow-net demo.ts
```
