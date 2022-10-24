function reverse (n, numbers) {

    let newArray = [];

    for(let i = 0; i < n; i++) {
    
         newArray[newArray.length] = numbers[i];
    }
    

    console.log(newArray);
    let output = '';

       for(let j = newArray.length - 1; j >= 0; j--) {
        output += `${newArray[j]} `;
        
       }
        console.log(output);
    }
    



reverse (3, [10, 20, 30, 40, 50])