function listProcessor(input) {

    let result = [];

    for(let line of input){
        let [command, word] = line.split(' ');
        switch(command){
            case "add": result.push(word); 
            break;
            case "remove": while(result.includes(word)){
                let index = result.indexOf(word);
                result.splice(index,1)
            }; break;
            case "print": console.log(result.join(','));
            break;
        }
    }


}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])