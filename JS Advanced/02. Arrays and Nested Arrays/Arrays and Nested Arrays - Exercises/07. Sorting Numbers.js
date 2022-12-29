function sortingNumbers(array) {

    let result = [];
    
    array.sort((a,b) => a - b);

    while(array.length > 0){
        let firstEl = array.shift();
        let lastEl = array.pop();
        result.push(firstEl);
        result.push(lastEl);
    }
    
    return result;
    }
    
    console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]))