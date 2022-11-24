function passwordReset (input) {

    let passWord = input.shift().split('');
    
    
    let i = 0;
    let line = input[i];
    
    while(line !== 'Done') {
        line = line.split(' ');
        let command = line.shift();
        let pass = '';
        
        if(command == 'TakeOdd') {
            for(let i = 0; i < passWord.length; i++){
                let letter = passWord[i];
                if(i % 2 !== 0) {
                    pass += `${letter}`;
                }     
            }
            passWord = pass;
            console.log(passWord)
        } else if(command === 'Cut') {
            let[index,length] = line;
            let start = passWord.substring(0,Number(index));
            let end = passWord.substring ((Number(index)+ Number(length)));
            passWord = start + end;
            
            console.log(passWord)
        } else if(command === 'Substitute') {
            let[substring,substitute] = line;
            if(!passWord.includes(substring)){
                console.log('Nothing to replace!');
            } else {
            while(passWord.includes(substring)){
                passWord = passWord.replace(substring,substitute);   
            } 
            console.log(passWord);
        }
        }
    
        i++;
        line = input[i];
    } 
    console.log(`Your password is: ${passWord}`)
    
    }

passwordReset ((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

)