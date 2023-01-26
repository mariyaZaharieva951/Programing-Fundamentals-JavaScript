function argumentInfo(input) {
    
    let argumentsArray = arguments;
    let counter = 0;
    let typeResult = {};

    for(let line of argumentsArray){
        let type = typeof line;
        console.log(`${type}: ${line}`);
    
        if(!typeResult.hasOwnProperty(type)){
            counter = 0;
        }
        counter++;
        typeResult[type] = counter;

    }


let entries = Object.entries(typeResult);
entries.sort((a,b) => a[1] - b[1]);
    console.table(entries)
    

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })