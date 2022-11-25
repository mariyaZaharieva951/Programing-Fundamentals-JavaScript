function adAstra (input) {

    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let result = [];
    input = input.join('');
    let match = pattern.exec(input);
    let totalCalories = 0;
    
    
    while(match !== null){
    totalCalories += Number(match.groups.calories);
    result.push({item:match.groups.item, date: match.groups.expirationDate, calories: match.groups.calories})
    
    match = pattern.exec(input);
    }
    let days = Math.floor(totalCalories / 2000);
    
    
    console.log(`You have food to last you for: ${days} days!`);
   
    for(let line of result) {
        console.log(`Item: ${line.item}, Best before: ${line.date}, Nutrition: ${line.calories}`)
    }
    
    }
    
    adAstra ([
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
        ]
        )