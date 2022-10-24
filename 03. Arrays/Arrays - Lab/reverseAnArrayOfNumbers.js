function reverse (n, numbers) {

    let elements = [];
    let result = '';

    for(let i = 0; i < n; i++) {
    
         
        elements[i] = numbers[n - 1 - i];
        result += elements[i] + ' ';
        
        
    }
    console.log(result);

}

reverse (3, [10, 20, 30, 40, 50])