function attachEvents() {
    let url = `http://localhost:3030/jsonstore/phonebook`
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');
    let loadButton = document.getElementById('btnLoad');
    let createButton = document.getElementById('btnCreate');
    let ul = document.getElementById('phonebook');
    
    loadButton.addEventListener('click', load);
    createButton.addEventListener('click', create);

    async function load(event) {
        event.preventDefault();
        ul.innerHTML = '';
        await fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            Object.values(data).forEach(line => {
                let li = document.createElement('li');
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                li.textContent = `${line.person}: ${line.phone}`;
                li.id = line._id;
                li.appendChild(deleteBtn);
                ul.appendChild(li);

                deleteBtn.addEventListener('click', onDelete)
            })
        })
        
    }

    async function create(event) {
        await fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({'person': person.value, 'phone': phone.value})
        })
        loadButton.click();
        person.value = '';
        phone.value = '';
        
    }

    async function onDelete(event) {
        let id = event.target.parentNode.id
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => event.target.parentNode.remove())
    }
}

attachEvents();