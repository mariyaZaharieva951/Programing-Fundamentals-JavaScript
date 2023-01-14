function deleteByEmail() {
    let array = [...document.querySelectorAll('tbody tr td')];
    let input = document.querySelector('input[name]');
    let result = document.getElementById('result');
    let isDeleted = true;

    for(let i = 1; i < array.length; i+=2){
        let currentTd = array[i];
        if(currentTd.textContent === input.value){
            let row = currentTd.parentNode;
            row.parentNode.removeChild(row);
            input.value = '';
            isDeleted = true;
        } else{ isDeleted = false}
    }if(isDeleted){
        result.textContent = 'Deleted.'
    } else {result.textContent = 'Not found.'}

}