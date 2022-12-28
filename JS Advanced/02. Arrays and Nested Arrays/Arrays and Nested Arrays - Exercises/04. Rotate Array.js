function rotateArray(array,n) {

for(let i = 0; i < n; i++){
    let lastEl = array[array.length-1];
    array.pop(lastEl)
    array.unshift(lastEl) 
}
console.log(array.join(' '))
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)