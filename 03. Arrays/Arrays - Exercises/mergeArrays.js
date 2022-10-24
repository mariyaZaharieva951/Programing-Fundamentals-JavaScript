function mergeArrays (arr1, arr2) {

let newArray = [];
let newArrayElement = 0;


for (let i = 0; i < arr1.length; i ++) {
    let curentElementArr1 = arr1[i];

    for (let j = i; j <= i; j++) {
        let curentElementArr2 = arr2[j];

        
            if(i % 2 === 0) {
                newArrayElement = Number(curentElementArr1) + Number(curentElementArr2); 
            } else {newArrayElement = curentElementArr1 + curentElementArr2}
        } 
        newArray.push(newArrayElement);
    }


console.log(newArray.join(` - `));
}

mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)