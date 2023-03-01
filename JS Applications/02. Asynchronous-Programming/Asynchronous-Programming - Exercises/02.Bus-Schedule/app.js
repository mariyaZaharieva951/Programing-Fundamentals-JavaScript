function solve() {

    let info = document.getElementById('info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    }

    function depart() {
        departButton.disabled = true;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`)
            .then((response) => response.json())
            .then((data) => {
                stop = JSON.parse(JSON.stringify(data));
                info.textContent = `Next stop ${stop.name}`;
            })
            .catch((error) => 
                console.log(error)
            )
            arriveButton.disabled = false;

    }
    function arrive() {
        info.textContent = `Arriving at ${stop.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();