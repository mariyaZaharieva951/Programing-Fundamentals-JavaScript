function printAnArray(array,delimiter) {

    let result = '';

for(let i = 0; i < array.length; i++){
    result += `${array[i]}${delimiter}`
}
console.log(result.slice(0,result.length-1));

}

printAnArray(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'

)