function vacation(people, type, day) {
    let price = 0;
    let totalPrice = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = 8.45;
            } else if (type === "Business") {
                price = 10.90;
            } else if (type === "Regular") {
                price = 15;
            } break;
        case "Saturday":
            if (type === "Students") {
                price = 9.80;
            } else if (type === "Business") {
                price = 15.60;
            } else if (type === "Regular") {
                price = 20;
            } break;
        case "Sunday":
            if (type === "Students") {
                price = 10.46;
            } else if (type === "Business") {
                price = 16;
            } else if (type === "Regular") {
                price = 22.50;
            } break;
    }
    totalPrice = people * price;

    if (type === "Students" && people >= 30) {
      totalPrice = totalPrice - (totalPrice * 15/100);
    } else if (type === "Business" && people >= 100) {
       totalPrice = totalPrice - (totalPrice * 10); 
    } else if (type === "Regular" && (people >= 10 && people <= 20)) {
        totalPrice = totalPrice - (totalPrice * 5/100);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday"
       
)