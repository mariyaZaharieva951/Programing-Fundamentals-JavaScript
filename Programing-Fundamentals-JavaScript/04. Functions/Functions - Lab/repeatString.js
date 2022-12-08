function repeatString (text, num) {

    let result = '';

for(let i = 0; i < num; i++) {

    result += text; 
}
return result;
}

console.log (repeatString ("abc", 3));
