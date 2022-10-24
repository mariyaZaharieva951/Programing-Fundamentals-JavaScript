function rotateArray (array) {

let rotate = Number(array[array.length - 1]);
array.pop();

for(let i = 0; i < rotate ; i++) {
    let firstElement = array[0];

    for (let j = 0; j < array.length; j++)  {   
    array[j] = array[j + 1]; 
    }
    array[array.length - 1] = firstElement;  
    

}


console.log(array.join(' '));
}

rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15'])