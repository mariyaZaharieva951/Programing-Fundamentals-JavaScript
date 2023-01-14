function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onValidator);
    
    let pattern = /([a-z]+)@([a-z]+)\.([a-z]+)/g;

    function onValidator(event){
        if(pattern.test(event.target.value)){
        event.target.classList.remove('error')
        }else{event.target.classList.add('error')}
    }
}