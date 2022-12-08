function companyUsers (array) {

    let result = {};

for(let line of array) {
    let[company, employee] = line.split(' -> ');
    if(result.hasOwnProperty(company)){
        if(!result[company].includes(employee)){
        (result[company]).push(employee);
        }
   }else {
    result[company] = [];
    result[company].push(employee);
    }
}
let sorted = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));
for(let element of sorted) {
    console.log(`${element[0]}\n-- ${(element[1]).join('\n-- ')}`);
}

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )