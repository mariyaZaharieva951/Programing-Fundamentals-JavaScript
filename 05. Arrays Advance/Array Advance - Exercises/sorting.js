function sorting(array) {

    let newArr = array.slice(0);
    newArr.sort((a,b) => a-b);
    let result = [];

    while(result.length < array.length){
    let firstEl = newArr.pop();
    result.push(firstEl);
    let lastEl = newArr.shift();
    result.push(lastEl);
}
console.log(result.join(' '));

}

sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])