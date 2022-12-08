function sortNumbers (n1, n2, n3) {
let points = [n1, n2, n3];
points.sort((a,b) => b - a);
let print = points.join('\n');
console.log(print);
}
 
sortNumbers (2, 1, 3)