function sortNumbers (n1, n2, n3) {
let points = [n1, n2, n3];
points.sort(function(a,b){return b-a});
let print = points.join(" ");
console.log(print);
}
 
sortNumbers (2, 1, 3)