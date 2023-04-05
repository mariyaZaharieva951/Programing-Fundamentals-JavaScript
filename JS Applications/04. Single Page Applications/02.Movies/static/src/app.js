//Подобрение на HTML стурктурата - ok
//създаваме app.js модул
//създаваме util.js да съдържа сквиране и показване на отделните изгледи
//плейсхолдъри за всички изгледи

//const { showView } = require("./router");

//релизиране на отделните изгледи
//-създаваме функците, който извършват заявките
//-манипулираме дом дървото
//детайли

//каталог
//логване
//регистриране
//създаване
//харесване
//редактиране
//изтриване

import { homePage } from './home.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { createPage } from './create.js';
import { updateNav} from './util.js';

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/logout': logout
    
}

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(event) {
    if(event.target.tagName === "A" && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);
        const view = routes[url.pathname]
        //console.log(url.pathname)
        if(typeof view === 'function') {
            view();
        }
    }
}



function logout() {
    alert('logged out');
    updateNav();
}

// Start application in catalog view
updateNav();
homePage(); 


