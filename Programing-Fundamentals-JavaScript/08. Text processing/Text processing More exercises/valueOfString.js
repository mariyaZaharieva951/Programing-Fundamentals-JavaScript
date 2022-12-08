function valueOfString (input) {

    let string = input[0];
    string = string.split('');
    let command = input[1];
    let sumOfLetters = 0;
    
        if(command === 'LOWERCASE') {
                let filtredString = string.filter(x => (x.charCodeAt() >= 97 && x.charCodeAt() <= 122));

                for(let letter of filtredString){
                    let valueOfLetter = letter.charCodeAt();
                    sumOfLetters += valueOfLetter;
                }
        } else if(command === 'UPPERCASE') {
            let filtredString = string.filter(x => (x.charCodeAt() >= 65 && x.charCodeAt() <= 90));

                for(let letter of filtredString){
                    let valueOfLetter = letter.charCodeAt();
                    sumOfLetters += valueOfLetter;
                }
        }
    console.log(`The total sum is: ${sumOfLetters}`)
    }
    
    valueOfString (['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
    )
    valueOfString (['AC/DC',
    'UPPERCASE']
    )