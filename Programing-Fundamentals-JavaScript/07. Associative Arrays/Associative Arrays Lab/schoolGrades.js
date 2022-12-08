function schoolGrades(array) {

    let object = {};
    let map = new Map();

for(let line of array) {
    line = line.split(' ');
    let name = line.shift();
    let grades = line;
    
    let sumOfGrades = 0;
    if(map.has(name)) {
        for(let currentGrade of object[name]){
            grades.push(currentGrade);
        }
        for(let grade of grades) {
            sumOfGrades += Number(grade);
        }
        map.delete(name);
    } else {
    for(let grade of grades) {
        sumOfGrades += Number(grade);
    }
}
    let averageGrade = sumOfGrades / grades.length;
    object[name] = grades;
    
    map.set(name, averageGrade.toFixed(2))
}

let soterted = Array.from(map.entries()).sort((a,b) => a[0].localeCompare(b[0]));

for(let line of soterted){
    console.log(`${line[0]}: ${line[1]}`)
}

}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']


)