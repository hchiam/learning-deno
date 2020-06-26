// deno run --allow-read cat.ts myfile.txt

/* Deno APIs are exposed through the `Deno` namespace. */
const { stdout, open, copy, args } = Deno;

for (let i = 0; i < args.length; i++) {
  const filename = args[i]; // args = CLI arguments
  const file = await open(filename);
  console.log();
  await copy(file, stdout); // zero-copy async copy: file -> stdout
  console.log();
}
