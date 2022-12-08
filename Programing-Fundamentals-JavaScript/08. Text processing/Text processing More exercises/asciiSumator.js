function asciiSumator (input) {

    let sum = 0;

let startChar = input[0];
let endChar = input[1];
let string = input[2];

let start = startChar.charCodeAt();
let end = endChar.charCodeAt();

for(let char of string){
    let codeChar = char.charCodeAt()
    if(start < end){
    if(codeChar > start && codeChar < end){
        sum += codeChar
    }
    } else {
        if (codeChar > end && codeChar < start) {
        sum += codeChar
    }}
    
}
console.log(sum)

}

asciiSumator (['a',
'1',
'jfe392$#@j24ui9ne#@$']


)