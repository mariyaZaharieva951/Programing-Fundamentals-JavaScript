function carWash (commanArray) {

let washingCar = 0;

for (let i = 0; i < commanArray.length; i++) {
    let command = commanArray[i];

    switch(command) {
     case 'soap': washingCar += 10; break;
     case 'water': washingCar = washingCar * 1.20; break;
     case 'vacuum cleaner': washingCar = washingCar * 1.25; break;
     case 'mud': washingCar = washingCar - washingCar * 0.10; break;

    }

}
console.log(`The car is ${washingCar.toFixed(2)}% clean.`)
}
carWash (['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
