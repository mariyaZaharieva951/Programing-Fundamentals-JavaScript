function lockedProfile() {
    let buttons = [...document.querySelectorAll('.profile button')];

    buttons.forEach(b => b.addEventListener('click', toggle))

    function toggle(event) {
        let button = event.target.parentElement.children[10];
        let parent = button.parentElement
        let input = parent.querySelector('.profile input[type="radio"][value="lock"]');
        if (!input.checked) {
            
            if (button.textContent === 'Show more') {
                let hiddenData = button.parentElement.children[9];
                hiddenData.style.display = 'block';
                button.textContent = 'Hide it'
            } else {
                let hiddenData = button.parentElement.children[9];
                hiddenData.style.display = 'none';
                button.textContent = 'Show more'
            }

        }
    }

}

