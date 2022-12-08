function bombNumbers (sequenceArr, bomb) {

//let sequence = sequenceArr.slice(0);
let specialNumber = bomb[0];
let power = bomb[1];
let sum = 0;
let index = 0;

for(let i = 0; i < sequenceArr.length; i++) {
    let currentNum = sequenceArr[i];

    if(currentNum === specialNumber) {
         index = i;

         sequenceArr.splice(index,(power + 1));

        if((index - power) < 0){  
            sequenceArr.splice(0,index);  
        } else {sequenceArr.splice(index-power,power);      
        }
     i = 0;   
    }   
}
for(let i = 0; i < sequenceArr.length; i++) {
    sum += sequenceArr[i];
}
console.log(sum)
}
bombNumbers ([2, 1,1, 2, 1, 1],
    [2, 2]
    
    )
