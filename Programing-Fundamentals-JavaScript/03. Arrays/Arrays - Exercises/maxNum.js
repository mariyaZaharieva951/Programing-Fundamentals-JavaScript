function maxNumber (array) {

    let result = '';
    let isMax = true;

for(let i = 0; i < array.length; i++) {
    let curentNum = array[i];
    let rightNum = 0;

    for(let j = i; j < array.length; j++) {
        let rightNum = array[j];

        if(curentNum > rightNum) {
            isMax = true;
            continue;
        } else{ isMax = false;
            break;}
    }
    if(isMax){
        result += `${curentNum} `;
            isMax = true;
        }
}
if(isMax) {
    console.log(result);
}
}
maxNumber ([41, 50])