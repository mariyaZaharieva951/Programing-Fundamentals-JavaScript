function magicMatrices(array) {

    let result = [];
    let isMagic = true;

    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i];

        let sumRow = 0;
        for (let j = 0; j < currentArray.length; j++) {
            let currentElement = currentArray[j];
            
            sumRow += currentElement;
        }
        result.push(sumRow);
    }
    for (let i = 0; i < array.length; i++) {
       let currentArray = array[i];

        let sumColum = 0;
        for (let j = 0; j < currentArray.length; j++) {
            let currentNum = currentArray[j];
            sumColum += currentNum;
        }
        result.push(sumColum);
    }
  //  for(let index = 0; index < result.length; index++) {
        let magicNum = result[0];

        for(let m = 1; m < result.length; m++) {
            let num = result[m];
            if(magicNum !== num) {
                isMagic = false;
                break;
            } else {isMagic = true;
        }
        }
       // break;    
   // }
    if(isMagic){
        console.log("true")
    } else {console.log("false")}
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)