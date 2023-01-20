function focused() {
    let buttons = [...document.querySelectorAll('div input')]

    for(let button of buttons){
        button.addEventListener('focus', onFocus);
        button.addEventListener('blur', onBlur)
    }
    
    function onFocus(event){
        event.target.parentElement.classList.add('focused')
    }

    function onBlur(event){
        event.target.parentElement.classList.remove('focused')
    }

}