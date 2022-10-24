function reverseInPlace (input) {

    let result = '';
    let res2 = '';

for(let i = 0; i < input.length / 2; i++) {
    let curentElement = input[i];
    input[i] = input[input.length - i - 1];
    input[input.length - i - 1] = curentElement;

    result = input;
    
}
    console.log(result.join(' '));

}

reverseInPlace (['33', '123', '0', 'dd'])