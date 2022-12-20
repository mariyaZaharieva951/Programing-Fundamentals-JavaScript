function squareOfStars(size) {

    let star = '*';

    if (size === 0) {
        size = 5
    }

    for (let i = 0; i < size; i++) {
        let row = '';
        for(let y = 0; y < size; y++){
            row += `${star} `
        }
        console.log(`${row}`);
    }


}

squareOfStars(5)