function sortTickets(tikets, criteria) {
    var ticketResult = [];
    for (var _i = 0, tikets_1 = tikets; _i < tikets_1.length; _i++) {
        var tiketLine = tikets_1[_i];
        var _a = tiketLine.split('|'), destination = _a[0], priceStr = _a[1], status_1 = _a[2];
        var price = parseFloat(priceStr);
        var ticket = {
            destination: destination,
            price: price,
            status: status_1
        };
        ticketResult.push(ticket);
    }
    if (criteria == 'destionation') {
        ticketResult.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (criteria == 'price') {
        ticketResult.sort(function (a, b) { return a.price - b.price; });
    }
    else if (criteria == 'status') {
        ticketResult.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
    return ticketResult;
}
var tickets = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var criteria = 'destination';
var sortedTickets = sortTickets(tickets, criteria);
console.log(sortedTickets);
