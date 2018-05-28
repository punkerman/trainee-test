'use strict';

const fs = require('fs');

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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
   var auxS1 = s1;
   var auxS2 = s2;
    
    for(let i = 0; i < s2.length; i++){
        auxS1 = auxS1.replace(s2[i],'');      
    }
        
    for(let i = 0; i < s1.length; i++){
        auxS2 = auxS2.replace(s1[i],'');      
    }
       
    return auxS1.length + auxS2.length;   
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}