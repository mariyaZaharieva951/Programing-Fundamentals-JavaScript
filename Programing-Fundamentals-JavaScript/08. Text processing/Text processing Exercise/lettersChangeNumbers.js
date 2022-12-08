function lettersChangeNumbers(input) {

    let array = input.split(' ');
    let result = 0;

    const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const alphabetLower = alphabetUpper.join(',').toLocaleLowerCase().split(',');

    for (let line of array) {
        let startChar = line.substring(0, 1);
        let endChar = line.substring(line.length - 1);
        let digit = line.substring(1, line.length - 1);



        if (startChar.charCodeAt() >= 65 && startChar.charCodeAt() <= 90) {
            let positionStartChar = alphabetUpper.indexOf(startChar) + 1;
            digit = digit / positionStartChar;
            result += digit;
        } else {
            let positionStartChar = alphabetLower.indexOf(startChar) + 1;
            digit = digit * positionStartChar;
            result += digit;
        }
        if (endChar.charCodeAt() >= 65 && endChar.charCodeAt() <= 90) {
            let positionEndChar = alphabetUpper.indexOf(endChar) + 1;
            result -= positionEndChar;
        } else {
            let positionEndChar = alphabetLower.indexOf(endChar) + 1;
            result += positionEndChar;
        }

    }
    console.log(result.toFixed(2))


}

lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A')