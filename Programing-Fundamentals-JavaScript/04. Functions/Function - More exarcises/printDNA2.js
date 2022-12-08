function printDNA (n) {

    let sequence = 'ATCGTTAGGG'
    let copyOfSequence = sequence.substring(0);
    
    for(let i = 1; i <= n; i++){
        let currentChars = copyOfSequence.substring(0,2);
        copyOfSequence = copyOfSequence.substring(2);
        if(copyOfSequence === ''){
            copyOfSequence = sequence;
        }
        if(i % 4 === 1){
        console.log(`**${currentChars}**`)
        } else if(i % 4 === 2){
        console.log(`*${currentChars[0]}--${currentChars[1]}*`)   
        } else if(i % 4 === 3){
        console.log(`${currentChars[0]}----${currentChars[1]}`)  
        } else if(i % 4 === 0){
        console.log(`*${currentChars[0]}--${currentChars[1]}*`)   
        }
    }
    }
    
    printDNA (10)