function sumOfOddNumbers (n) {
let sum = 0;

    for (let x = 1; x <= n * 2; x++) {
        if (x % 2 !== 0) {
            console.log(x);
            sum += x;
            
        }
    }
    console.log(`Sum: ${sum}`);


}

sumOfOddNumbers (3)