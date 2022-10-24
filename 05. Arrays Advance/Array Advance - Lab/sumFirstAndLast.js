function sumFirstAndLast (arr){

    //let lastNum = Number(arr[arr.length - 1]);
    //let firstNum = Number(arr[0]);
    //let sum = firstNum + lastNum;
    //return(sum);


    let first = Number(arr[0]);
    let last = Number(arr.pop());
    let summ = first + last;
    return summ;




}

console.log(sumFirstAndLast(['20', '30', '40']))