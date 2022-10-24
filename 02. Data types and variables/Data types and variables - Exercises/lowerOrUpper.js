function lowerOfUpper (char) {

    let numChar = char.charCodeAt();

if (numChar >= 65 && numChar <= 90) {
    console.log('upper-case')
} else {console.log('lower-case')}
//console.log(numChar);
}

lowerOfUpper ('L')