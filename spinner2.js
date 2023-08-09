const animationFrames = [   
  { char: '|', delay: 100 },
  { char: '/', delay: 300 },
  { char: '-', delay: 500 },
  { char: '\\', delay: 700 },
  { char: '|', delay: 900 },
  { char: '/', delay: 1100 },
  { char: '-', delay: 1300 },
  { char: '\\', delay: 1500 },
  { char: '|', delay: 1700 },
];

for (const frame of animationFrames) { 
  setTimeout(() => {
    process.stdout.write(`\r${frame.char}   `);
  }, frame.delay);
}
