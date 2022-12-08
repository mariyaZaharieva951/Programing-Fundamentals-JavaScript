function login(array) {

    let i = 0;
    let username = array[i];
    i++;
    let password = username.split('').reverse().join('');
    let currentUsername = array[i];
    let counter = 0;

    while (currentUsername !== password) {
        counter++;

        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);

        i++;
        currentUsername = array[i];
    }
    if (currentUsername === password) {
        console.log(`User ${username} logged in.`)
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])