'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
     const n = parseInt(readLine(), 10);
    const arr = [];  
    while(arr.push([]) < n/2); 
    for (let nItr = 0; nItr < n; nItr++) {
        const xs = readLine().split(' ');

        const x = parseInt(xs[0], 10);

        const s = xs[1];

    if(nItr < n/2) arr[x].push('-')
    else arr[x].push(s)
       
                       
    }
    
    console.log(arr.map(e => e.join(' ')).join(' '));
    
}