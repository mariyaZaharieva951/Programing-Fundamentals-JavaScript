function validate() {
    let input = document.getElementById('email');
    let pattern = /([a-z]+@[a-z]+.[a-z]+)/g;

    input.addEventListener('change', validator);

    function validator(event) {
        if (!pattern.test(input.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    }
}