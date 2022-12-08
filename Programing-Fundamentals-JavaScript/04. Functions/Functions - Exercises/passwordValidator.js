function passwordValidator (password) {

    let isValid = true;

if(password.length >= 6 && password.length <= 10) {
    isValid = true;
} else {console.log(`Password must be between 6 and 10 characters`);
isValid = false;
}

    let startElementDigit = String.fromCharCode(48);
    let finishElementDigit = String.fromCharCode(57);
    let startElementLetterBig = String.fromCharCode(65);
    let finishElementLetterBig = String.fromCharCode(90);
    let startElementLetterSmall = String.fromCharCode(97);
    let finishElementLetterSmall = String.fromCharCode(122);

 for(let i = 0; i < password.length; i++){
    let currentElement = password[i];
    
    if((currentElement >= startElementDigit && currentElement <= finishElementDigit) || (currentElement >= startElementLetterBig && currentElement <= finishElementLetterBig) || (currentElement >= startElementLetterSmall && currentElement <= finishElementLetterSmall)){
        isValid = true;
} else {console.log(`Password must consist only of letters and digits`);
isValid = false;
break;
}
   
}
    let arrayPassword = password.split('');
    let lastElement1 = arrayPassword[arrayPassword.length - 1];
    let lastElement2 = arrayPassword[arrayPassword.length - 2];

    if((lastElement1 >= startElementDigit && lastElement1 <= finishElementDigit) && (lastElement2 >= startElementDigit && lastElement2 <= finishElementDigit)) {
        isValid = true;
    } else {console.log(`Password must have at least 2 digits`);
isValid = false;
}
if(isValid) {
    console.log(`Password is valid`);
}

}
passwordValidator ('$MyPass123')