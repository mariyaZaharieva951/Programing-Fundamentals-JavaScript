function houseParty (array) {

let strArr = [];
let newArr = [];

for(let i = 0; i < array.length; i++) {
     strArr = array[i];
   strArr = strArr.split(' ');

    for(let el of strArr) {
        let name = strArr[0];
        if(!strArr.includes('not')){
            if(newArr.includes(name)){
                console.log(`${name} is already in the list!`);
                break;
            } else {newArr.push(name);
            break;}
    } else {
        if(newArr.includes(name)){
            let index = newArr.indexOf(name);
            newArr.splice(index,1);
            break;
        } else {console.log(`${name} is not in the list!`);
        break;
    }
        
    }
}
}
console.log(newArr.join('\n'))

}

houseParty (['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])

