function colorize() {
    let rows = Array.from(document.querySelectorAll('table tr'));
    for(let i = 0; i < rows.length; i++){
        if(i % 2 !== 0){
            let row = rows[i];
            row.style.background = "teal"
        }
    }
}
