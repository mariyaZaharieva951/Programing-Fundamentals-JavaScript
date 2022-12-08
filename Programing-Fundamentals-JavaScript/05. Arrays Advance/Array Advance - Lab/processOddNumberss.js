function processOddNumbers (arr) {

    
    let odd = arr.filter((x, i) => (i % 2 !== 0));
    let double = odd.map(y => (y * 2));
    let result = double.reverse();

    console.log(result.join(' '));


}

processOddNumbers ([3, 0, 10, 4, 7, 3])