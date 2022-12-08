function maxNumber (array) {

    
    let newArr = [];

    for(let i = 0; i < array.length; i++) {
        let isBigger = true;
        let curentNum = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let num = array[j];

            if(curentNum <= num) {
                isBigger = false;
            }    
        } 
        if(isBigger) {
            newArr.push(curentNum);
        }
    }
    console.log(newArr.join(' '))
}
maxNumber ([7, 7, 3])