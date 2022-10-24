function login (array) {

    let username = array[0];    
    let password = username.sort;
    let incorrect = 0;

    for(let i = 1; i < array.length; i++ ) {
        let pass = array[i];

        if ( pass === password) {
            console.log(`User ${username} logged in.`);
        } else { incorrect++;
            if (incorrect < 4) {
            console.log(`Incorrect password. Try again.`);
        } else {console.log(`User ${username} blocked!`);
    }
}
    }


}

login (['Acer','login','go','let me in','recA'])