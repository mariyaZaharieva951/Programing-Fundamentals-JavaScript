function equalSums(array) {

    let isDiff = true;

    for (let i = 0; i < array.length; i++) {
        let curentNum = array[i];

        let sumLeft = 0;
        for (let l = 0; l < i; l++) {
            let numberLeft = array[l];
            sumLeft += numberLeft;
        }
        let sumRight = 0;
        for (let r = i + 1; r < array.length; r++) {
            let numberRight = array[r];
            sumRight += numberRight;
        }

        if(sumLeft !== sumRight) {
           isDiff = true ;
           
        } else {console.log(i);
            isDiff = false;
            break;}
    }
    if (isDiff) {
        console.log('no')}
}

equalSums([1, 2, 3])