function attachEvents() {
   let url = `http://localhost:3030/jsonstore/messenger`;
   
   let text = document.getElementById('messages');
   let author = document.querySelector('input[name="author"]');
   let content = document.querySelector('input[name="content"]');

   let sumbmitBtn = document.getElementById('submit').addEventListener('click', submit);
   let refreshBtn = document.getElementById('refresh').addEventListener('click', refresh);

    async function submit(event) {
        event.preventDefault();

        await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({'author': author.value, 'content': content.value})
        })
        .then(response => response.json())
        .then(data => data)

        author.value = '';
        content.value = '';
    }

    async function refresh(event) {
        event.preventDefault();

        await fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {let result = [];
            Object.values(data).forEach(element => {
               result.push(`${element.author}: ${element.content}`);
                text.textContent = result.join('\n')
            })
        });
    }
}

attachEvents();