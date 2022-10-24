function sortNumbers (n1, n2, n3) {
  
let max = Number.NEGATIVE_INFINITY;
if (n1 > max) {
    max = n1;
} 
if (n2 >= max) {
    max = n2;
}
if (n3 >= max) {
    max = n3;
}
let min = Number.POSITIVE_INFINITY;
if (n1 < min) {
    min = n1;
} 
if (n2 <= min) {
    min = n2;
}
if (n3 <= min) {
    min = n3;
}
let average = 0;
if (n1 !== min && n1 !== max) {
    average = n1;
} else if (n2 !== min && n2 !== max) {
    average = n2;
} else if (n3 !== min && n3 !== max) {
    average = n3;
}
  console.log(max);
  console.log(average);
  console.log(min);
    }
     
    sortNumbers (0, 0, 2)