for (let i = 1; i <= 2; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 * i);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 * i);
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 * i);
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 700 * i);
}
setTimeout(() => {
  process.stdout.write('\r|\n');
}, 2000);