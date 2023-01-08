function sumTable() {
    let rows = Array.from(document.querySelectorAll("table tr"));
    let totalSum = 0;
    for(let i = 1; i < rows.length; i++){
        let column = rows[i].children;
        let price = (column[column.length - 1]).textContent;
        totalSum += Number(price);
    }
    document.getElementById('sum').textContent = totalSum;
}