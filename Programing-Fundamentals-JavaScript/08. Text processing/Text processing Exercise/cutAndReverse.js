function cutAndReverse (input) {

    let length = input.length;

    let cutInput1 = input.slice(0, length/2);
    let cutInput2 = input.slice(length/2);

    let word1 = cutInput1.split('').reverse().join('');
    let word2 = cutInput2.split('').reverse().join('')

    
    console.log(`${word1}\n${word2}`)




}

cutAndReverse ('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')