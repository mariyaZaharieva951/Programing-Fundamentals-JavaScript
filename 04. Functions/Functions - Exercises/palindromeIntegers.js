function palindromeIntegers(array) {

for(let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    let stringNum = currentNum.toString();
    let stringArray = stringNum.split('');
    let reverse = stringArray.reverse();
    let stringReverce = reverse.join('');

    if(stringNum === stringReverce) {
        console.log("true");
    } else {console.log("false")}
}

}

palindromeIntegers ([123,323,421,121])