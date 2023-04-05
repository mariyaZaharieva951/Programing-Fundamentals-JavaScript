
import { homePage } from './home.js';
import { showView, updateNav } from './util.js'

const section = document.querySelector('#form-login');
const form = section.querySelector('form');

form.addEventListener('submit', onSubmit);

export function loginPage() {
    showView(section)
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email,password);
    form.reset();
    updateNav();
    homePage();
}

async function login(email, password) {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email,password})
        });
        if(response.ok !== true) {
            const error = await response.json()
            throw new Error(error.message)
        }
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user))

    } catch(err) {
        alert(err.message);
        throw err;
    }
}

window.login = login