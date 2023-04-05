import { homePage } from './home.js';
import { showView } from './util.js'


const section = document.querySelector('#add-movie'); 
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function createPage() {
    showView(section)
}

async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('img');

    await createMovie(title,description,img)
    form.reset();
    homePage();
}

async function createMovie(title, description, img) {
    const user = JSON.parse(localStorage.getItem('user'));
    let response = await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({title,description,img})
    })
}

window.createMovie = createMovie;