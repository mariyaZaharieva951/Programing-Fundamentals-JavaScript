function pieceOfPie(array, target1, target2) {

let index1 = array.indexOf(target1);
let index2 = array.indexOf(target2);

let result = array.slice(index1, index2+1);
return result;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))