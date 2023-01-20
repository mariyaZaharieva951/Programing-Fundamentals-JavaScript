function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let buttons = [...document.querySelectorAll('[type="button"]')];
    buttons.forEach(b => b.addEventListener('click', convert));

    function convert(event) {
        let input = event.target.parentElement.children[1];
        let type = input.id
        console.log(days.value)
        switch (type) {
            case 'days':
                hours.value = Number(days.value) * 24;
                minutes.value = Number(days.value) * 1440;
                seconds.value = Number(days.value) * 86400;
                break;
            case 'hours':
                days.value = Number(hours.value) / 24;
                minutes.value = Number(days.value) * 1440;
                seconds.value = Number(days.value) * 86400;
                break;
            case 'minutes':
                hours.value = Number(minutes.value) / 60;
                days.value = Number(hours.value) / 24;
                seconds.value = Number(days.value) * 86400;
                break;
            case 'seconds':
                minutes.value = Number(seconds.value) / 60;
                hours.value = Number(minutes.value) / 60;
                days.value = Number(hours.value) / 24;
                break;
                    
        }
    }

}