type Ticket = {
    destination: string;
    price: number;
    status: string;   
};

function sortTickets(tikets: string[], criteria: string): Ticket[] {
    const ticketResult: Ticket[] = [];


for(const tiketLine of tikets) {
    const [destination, priceStr, status] = tiketLine.split('|');
    const price = parseFloat(priceStr);
    const ticket: Ticket = {
        destination,
        price,
        status
    }
    ticketResult.push(ticket)
}

if(criteria == 'destionation') {
    ticketResult.sort((a,b) => a.destination.localeCompare(b.destination));
} else if(criteria == 'price') {
    ticketResult.sort((a,b) => a.price - b.price);
} else if(criteria == 'status') {
    ticketResult.sort((a,b) => a.status.localeCompare(b.status));
}
return ticketResult;
}


const tickets: string[] = [
'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'
]
const criteria: string = 'destination';

const sortedTickets = sortTickets(tickets,criteria);
console.log(sortedTickets)