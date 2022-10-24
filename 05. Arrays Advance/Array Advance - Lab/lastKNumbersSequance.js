function lastKNumbersSequence (n, k) {

let sequence = [1];


for(let i = 0; i < n - 1; i++) {
    let current = sequence.slice(-k);

    let sum = 0;
    for(let j = 0; j < current.length; j++ ) {
        let num = current[j];
        sum += num;
    }
    
    sequence.push(sum);
}


console.log(sequence.join(' '))


}

lastKNumbersSequence (6, 3)



