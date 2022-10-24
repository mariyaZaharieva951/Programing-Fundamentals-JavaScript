function ages (age) {

    let person = "";

    if (age >= 0 && age < 3) {
        person = "baby";
    } else if (age >= 3 && age < 14) {
        person = "child";
    } else if (age >= 14 && age < 20) {
        person = "teenager";
    } else if (age >= 20 && age < 66) {
        person = "adult";
    } else if (age >= 66) {
        person = "elder";
    } else {person = "out of bounds"}

    console.log(person);
}

ages (-1)