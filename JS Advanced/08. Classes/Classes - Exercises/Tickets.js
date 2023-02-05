function tickets(array, criterion) {

    let result = [];

array.forEach(line => {
    let[destination,price,status] = line.split('|');
    
    class Ticket {
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticket = new Ticket(destination,price,status);
    result.push(ticket)
});

if(criterion !== 'price'){
return result.sort((a,b) => a[criterion].localeCompare(b[criterion]));
} else {
    return result.sort((a,b) => a[criterion] - b[criterion]);   
}

}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'

)