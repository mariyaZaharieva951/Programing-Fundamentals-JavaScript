function triangleArea (side1, side2, side3) {

let P = (side1 + side2 + side3) / 2;

let S = Math.sqrt(P * (P - side1) * (P - side2) * (P - side3));

console.log(S);



}

triangleArea (2,
    3.5,
    4
    )