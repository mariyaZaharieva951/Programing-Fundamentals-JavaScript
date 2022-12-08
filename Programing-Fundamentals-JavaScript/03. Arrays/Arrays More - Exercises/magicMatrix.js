function magicMatrices(arrays) {

    let isMagic = true;
    let magicSum = 0;
    let sumOfNumbers = 0;

    let one = arrays[0];
    for(let el of one){
        magicSum += el;
    }
     for(let arr of arrays) {
        sumOfNumbers = 0;
        for(let i = 0; i < arr.length; i++) {
            sumOfNumbers += arr[i];
        }
        if(!sumOfNumbers === magicSum) {
            isMagic = false;
            break;
        } else(isMagic = true);
    }
    sumOfNumbers = 0;
    let sumOfNumbers1 = 0;
    let sumOfNumbers2 = 0;
    let sumOfNumbers3 = 0;
    for(let arr of arrays) {
       sumOfNumbers1 += arr[0];
       sumOfNumbers2 += arr[1];
       sumOfNumbers3 += arr[2];
    }
    if(sumOfNumbers1 === magicSum && sumOfNumbers2 === magicSum && sumOfNumbers3 === magicSum){
        isMagic = true;
    } else {isMagic = false;
}
    if(isMagic){
        console.log("true")
    } else {console.log("false")}
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
)