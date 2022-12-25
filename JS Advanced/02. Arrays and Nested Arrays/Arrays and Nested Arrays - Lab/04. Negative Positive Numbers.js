function negativePositiveNumbers(numbers) {

    let result = [];

    for(let num of numbers){
        if(num < 0){
            result.unshift(num);
        } else{result.push(num)}
    }

for(let el of result){
    console.log(el)
}
}

negativePositiveNumbers([3, -2, 0, -1])