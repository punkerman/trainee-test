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
    const s = parseInt(readLine(), 10);
    const arr = []
    const posibleCombinations = [1,2,3]
    const stepCombinations = stepper(posibleCombinations);
    for (let sItr = 0; sItr < s; sItr++) {
        const n = parseInt(readLine(), 10);
        arr[sItr]= n 
    }
    arr.forEach(value => console.log(stepCombinations(value)));
    
    
   function stepper(stepSizes) {
            let ans = [1,1];
            return function(numSteps) {
                if(numSteps < 0) {
                    return 0;
                }else if((typeof ans[numSteps] === 'undefined') || (typeof ans[numSteps] === null)) {
                    ans[numSteps] = stepSizes.reduce((totalSteps, stepSize) => totalSteps + stepCombinations(numSteps-stepSize), 0);
                }
                return ans[numSteps];
            };
}    
 
}