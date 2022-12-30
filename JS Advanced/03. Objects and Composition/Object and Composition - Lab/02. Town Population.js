function townPopulation(array) {

    let result = {};

for(let i = 0; i < array.length; i++){
    let [town, population] = array[i].split(' <-> ');
    population = Number(population)
    if(result.hasOwnProperty(town)){
        result[town] += population;
    } else {result[town] = population;}
    
}
for(let line in result){
    console.log(`${line} : ${result[line]}`)
}
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)