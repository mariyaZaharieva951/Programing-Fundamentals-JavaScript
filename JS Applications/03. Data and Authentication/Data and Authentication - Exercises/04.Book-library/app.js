function books() {
let url = `http://localhost:3030/jsonstore/collections/books`;

let title = document.querySelector('input[name="title"]');
let author = document.querySelector('input[name="author"]');
let table = document.querySelector('table');
let tbody = document.querySelector('tbody');
let buttonsArray = [...document.querySelectorAll('button')];
let submitButton = buttonsArray[5];
let loadBtn = document.getElementById('loadBooks');
let h3 = document.getElementsByTagName('h3')[0];
const form = document.getElementsByTagName('form')[0];

loadBtn.addEventListener('click', onLoad);
//submitButton.addEventListener('click', create);
form.addEventListener('submit', delegationButtons);


async function onLoad(event) {
    
    tbody.innerHTML = '';
    const response = await fetch(url)
    if (response.ok !== true) {
        throw new Error('Error')
    }
    const data = await response.json();
    console.log(data)
    Object.values(data).forEach((book) => {
        let tr = document.createElement('tr');
        tr.id = book._id
        let tdTitle = document.createElement('td');
        let tdAuthor = document.createElement('td');
        let tdAction = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', onEdit);
        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', onDelete)

        tdTitle.innerText = book.title;
        tdAuthor.innerText = book.author;
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';

        tdAction.appendChild(editBtn);
        tdAction.appendChild(deleteBtn);

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdAction);

        tbody.appendChild(tr);

    })

}

async function create(event) {
    event.preventDefault();

    if (title.value === '' || author.value === '') {
        throw new Error('The filds must not be empty!')
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application.json' },
        body: JSON.stringify({ 'author': author.value, 'title': title.value })
    })
    if (response.ok !== true) {
        throw new Error('Error');
    }
    const data = await response.json();
    //console.log(data)
    //loadBtn.click();
    title.value = '';
    author.value = '';
}

async function onDelete(event) {
    let parent = event.target.parentNode.parentNode;
    //console.log(parent)
    let id = parent.id;
    //console.log(id)
    let response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
    })
    if(response.ok !== true) {
        let error = await response.json();
        throw new Error(error.message)
    }
    parent.remove()
}   


async function onEdit(event) {
        let parent = event.target.parentNode.parentNode;
        const titleTd = parent.getElementsByTagName('td')[0].textContent;
        const authorTd = parent.getElementsByTagName('td')[1].textContent;
        title.value = titleTd;
        author.value = authorTd;
        h3.textContent = 'Edit FORM'
        
        buttonsArray.forEach((btn) => {
            if(btn.textContent === 'Submit') {
                btn.textContent = 'Save';
                localStorage.setItem('bookData', parent.id) //записваме данните за книгата 
            }
        })
    }

function delegationButtons(event) {
    const currentButton = event.target.getElementsByTagName('button')[0];
    if(currentButton.textContent === 'Submit') {
        create(event);
    } else if(currentButton.textContent === 'Save') {
        onUpdate(event);
}
}

async function onUpdate(event) {
    event.preventDefault();
    let id = localStorage.getItem('bookData');
    localStorage.removeItem('bookData');

    const formData = new FormData(event.target);
    const author = formData.get('author');
    const title = formData.get('title');

    event.target.getElementsByTagName('button')[0].textContent = 'Submit';
    event.target.getElementsByTagName('h3')[0].textContent = 'FORM';

    if(author === '' || title === '') {
        throw new Error('The filds must not be empty!');
    }
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({author, title})
    })
    if(response.ok !== true) {
        const error = await response.json();
        throw new Error(error.message)
    }
    onLoad();
    event.target.reset();
}
}
books()