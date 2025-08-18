const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);

    console.log(a * (b % 10));                         
    console.log(a * (Math.floor(b / 10) % 10));         
    console.log(a * Math.floor(b / 100));              
    console.log(a * b);                                
});
