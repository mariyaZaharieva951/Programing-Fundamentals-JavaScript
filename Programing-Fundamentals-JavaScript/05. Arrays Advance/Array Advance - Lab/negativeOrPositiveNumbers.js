function negativOrPositiveNumber (arr) {

let newArr = [];
//for(let i = 0; i < arr.length; i++) {
//    let currentNum = arr[i];
//    if(currentNum < 0) {
//        newArr.unshift(currentNum);
//    } else{newArr.push(currentNum)}

//}

let negative = arr.filter(x => (x < 0));
let possitive = arr.filter(y => (y >= 0));
newArr.push(negative.join('\n'));
newArr.push(possitive. join('\n')); 
console.log(newArr.join('\n'))

}

negativOrPositiveNumber(['7', '-2', '8', '9'])