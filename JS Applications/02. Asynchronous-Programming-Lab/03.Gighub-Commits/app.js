function loadCommits() {
    let user = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let list = document.querySelector('#commits');
    list.innerHTML = '';

    fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then((response) => {
        console.log(response);
        if(response.ok === false) {
            let error = response.status;
            return Promise.reject(`${error}`)
            
        }
        return response.json();
    })
    .then((data) => data.forEach(x => {
        factory('li', `${x.commit.author.name}:${x.commit.message}`,'commits');

    }))
    .catch((err) => factory('li', `Error ${err} (Not Found)`));


    function factory(el,text,id) {
        let element = document.createElement(el);
        element.textContent = text;
        element.id = id;
        list.appendChild(element);
        return element;
        
    }
}