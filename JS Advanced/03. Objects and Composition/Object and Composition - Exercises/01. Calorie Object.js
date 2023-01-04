function calorieObject (input) {

    let result = {};

for(let i = 0; i < input.length; i+=2){
    let food = input[i];
    let calories = Number(input[i+1]);
    
    result[food] = calories;
}
console.log(result)

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])