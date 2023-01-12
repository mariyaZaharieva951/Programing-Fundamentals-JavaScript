function generateReport() {
    let data = Array.from(document.querySelectorAll('tbody tr'))
    let inputElements = Array.from(document.querySelectorAll('thead th input'));
    let output = document.getElementById('output')
    let result = [];
    

    
    for(let j = 0; j < data.length; j++){
        let object = {};

        for(let i = 0; i < inputElements.length; i++){

        let row = data[j];
        let value = row.children[i].textContent;
        if(inputElements[i].checked){
            object[inputElements[i].name] = value;
         } 
  
        result.push(object)
        
    }
}
output.value = result;
console.log(result)
}