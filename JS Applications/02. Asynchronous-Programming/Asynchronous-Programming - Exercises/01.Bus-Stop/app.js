async function getInfo() {
    let input = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let ul = document.getElementById('buses');

    try {
        let response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${input}`);
        let data = await response.json();

        if(response.ok !== true) {
            throw new Error('Error')
        }
        stopName.textContent = data.name
        ul.innerHTML = '';
        Object.keys(data.buses).forEach((key) => {
            let busId = key;
            let time = data.buses[key];
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            ul.appendChild(li);
        })
    }
    catch(error) {
        ul.innerHTML = '';
        stopName.textContent = 'Error'
    }



}