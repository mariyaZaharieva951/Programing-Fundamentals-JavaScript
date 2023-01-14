function attachGradientEvents() {
    let button = document.getElementById('gradient');
    button.addEventListener('mousemove', mouseMove);
    button.addEventListener('mouseout', mouseOut);
    let result = document.getElementById('result')

    function mouseMove(event) {
            result.textContent = Math.floor(event.offsetX/button.clientWidth*100) + '%'
    }

    function mouseOut(event) {
            result.textContent = '';
    }
}