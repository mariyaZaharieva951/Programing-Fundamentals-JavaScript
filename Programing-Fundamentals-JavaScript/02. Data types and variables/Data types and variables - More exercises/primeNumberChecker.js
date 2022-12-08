function primeNumberChecker (num) {

    let result = '';

    for (let i = 1; i <= 9; i++) {
        let divisible = Number(i);

        if (divisible !== 1 && divisible !== num) {
            if(num % divisible !== 0) {
                result = true;
            } else {result = false;
            break;}

        }
    }

console.log(result);
}

primeNumberChecker (233)