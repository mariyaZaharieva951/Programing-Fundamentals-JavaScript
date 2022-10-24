function reverse (n, numbers) {

    let newArray = [];

    for(let i = 0; i < n; i++) {
        let currentElement = numbers[i];
        newArray.push(currentElement);
       }
       newArray.reverse();
        console.log(newArray.join(' '));
    }
    



reverse (3, [10, 20, 30, 40, 50])