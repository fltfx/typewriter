const sentence = "hello there from lighthouse labs";
//console.log(sentence);

let iteration = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, iteration) // <= 1s delay to make it noticeable. Can dial it down later.
  iteration += 50;
}
setTimeout(() => {
  console.log("\n");
}, iteration)