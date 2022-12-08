function printNthElement (array) {

    
    let arrayLength = array.length;
    let collection = '';
    let step = Number(array[array.length - 1]);
            
    
        for(let j = 0; j < arrayLength - 1; j += step) {
            let collectNum = array[j];
            collection += `${collectNum} `
            
        }
        console.log(collection);
    }



printNthElement (['5', '20', '31', '4', '20', '2'])