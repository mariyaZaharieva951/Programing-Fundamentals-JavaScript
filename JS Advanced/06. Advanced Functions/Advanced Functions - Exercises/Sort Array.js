function sortArray(array, order) {

switch(order){
    case "asc": array.sort((a,b) => a - b);
    break;
    case "desc": array.sort((a,b) => b - a);
    break;
}
return array
}

sortArray([14, 7, 17, 6, 8], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')