function serializeString(input) {

    input = input.join(' ').split('');
    let result = '';
    let isRepeat = true;

for(let i = 0; i < input.length; i++) {
    let letter = input[i];
    result = `${input[i]}:${i}`;
    if(!input.slice(0,i).includes(letter)){
        isRepeat = true;
    for(let j = (i+1); j < input.length; j++){
        let nextLetter = input[j];
        if(letter === nextLetter){
        result += `/${j}`;
    }
    }    
} else{isRepeat = false}

if(isRepeat){
console.log(result);
    result = '';
}
}
}
serializeString (["avjavamsdmcalsdm"])
serializeString (["abababa"])