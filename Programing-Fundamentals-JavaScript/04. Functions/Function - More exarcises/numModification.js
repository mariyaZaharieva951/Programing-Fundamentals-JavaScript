function numModification (number) {

    let stringNumber = number.toString();
    let numArray = stringNumber.split('');
    let sumNumbers = 0;
    let counter = 0;
    

    function sum (numbers) {
        sumNumbers = 0;
        counter = 0;
        for(let i = 0; i < numArray.length; i++) {
            let currentNumber = Number(numArray[i]);
            counter++;
            sumNumbers += currentNumber;
    }
}
sum(numArray);

    let averageSum = 0;
    
    for(let i = 0; i < numArray.length; i++) {
        averageSum = sumNumbers/counter
        if(averageSum <= 5) {
            numArray.push('9');
            sum(numArray);
        } else { return numArray.join('')
        }
        
    }
   
    
}
numModification(101)