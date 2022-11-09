function stringSubstring (word, text) {

    word = word.toLowerCase();
    text = text.toLowerCase();

    let textArr = text.split(' ');

    for(let str of textArr){
        if(word === str){
            console.log(word);
            return
        } 
    }
console.log(`${word} not found!`)

}

stringSubstring ('python',
'JavaScript is the best programming language'

)