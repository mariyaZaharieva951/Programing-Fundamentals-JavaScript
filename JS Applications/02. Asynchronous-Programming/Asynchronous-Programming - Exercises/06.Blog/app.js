function attachEvents() {

    let input = document.getElementById('posts');
    let buttonLoad = document.getElementById('btnLoadPosts');
    let buttonView = document.getElementById('btnViewPost');
    let p = document.getElementById('post-body');
    let ul = document.getElementById('post-comments');
    let h1 = document.getElementById('post-title');

    buttonLoad.addEventListener('click', posts);
    buttonView.addEventListener('click', view);

    let bodys = [];

    async function posts(event) {
        let url = `http://localhost:3030/jsonstore/blog/posts`;

        let response = await fetch(url);
        let dataPosts = await response.json();
        input.innerHTML = '';
        ul.innerHTML = '';

        for (let key of Object.keys(dataPosts)) {
            let option = document.createElement('option');
            option.value = dataPosts[key].id;
            option.textContent = dataPosts[key].title;
            bodys.push({id:dataPosts[key].id, body:dataPosts[key].body})
            p.style.display = 'none';
            input.appendChild(option);

        }
    }
    async function view(event) {
        ul.innerHTML = '';
        let currentPost = document.getElementById('posts').value;
        let currentOption = document.querySelector('option')
        let urlComents = `http://localhost:3030/jsonstore/blog/comments`;
        let responseComents = await fetch(urlComents);
        let dataComents = await responseComents.json();
        h1.textContent = currentOption.textContent;
        
        for (let key of Object.keys(dataComents)) {
            if (dataComents[key].postId === currentPost) {
            
                let li = document.createElement('li');
                li.textContent = dataComents[key].text;
                li.id = dataComents[key].postId;
                ul.appendChild(li);
                let found = bodys.find((el) => el.id === dataComents[key].postId)
                if(found) {
                    p.textContent = found.body;
                    p.style.display = 'block';
                }
            }
        }        
    }

}

attachEvents();