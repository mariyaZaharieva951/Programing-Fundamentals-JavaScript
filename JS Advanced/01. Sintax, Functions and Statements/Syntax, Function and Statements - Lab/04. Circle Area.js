function circleArea(input) {

if(typeof input == "number"){
    let radius = input
    let circleArea = Math.PI * (radius ** 2);
    console.log(circleArea.toFixed(2))
} else {console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)}
}

circleArea ('name')