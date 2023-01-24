function filterEmployees(input, criteria) {

    let data = JSON.parse(input);
    let [property, value] = criteria.split('-');
    let counter = 0;


    for(let line of data){
        
        if(line[property] === value){
            console.log(`${counter++}. ${line['first_name']} ${line['last_name']} - ${line['email']}`)    
        }
    }
}

filterEmployees (`[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Maldina","email": "ev2@hostgator.com","gender": "Male"}]`,
'last_name-Johnson'
)