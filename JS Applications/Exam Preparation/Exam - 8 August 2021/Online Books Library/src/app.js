import {html,render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs';
import { logout } from './api/data.js';
import { getUserData } from './util.js';
import { catalogPage } from './view/catalog.js';
import { createPage } from './view/create.js';
import { detailsPage } from './view/details.js';
import { editPage } from './view/edit.js';
import { loginPage } from './view/login.js';
import { myBookPage } from './view/myBooks.js';
import { registerPage } from './view/register.js';

let root = document.querySelector('#site-content');


page(decorateComtext);
page('/', catalogPage)
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/myBooks', myBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage)

updateUserNav();
page.start();






function decorateComtext(ctx,next) {
    ctx.render = (content) => render(content,root)
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav() {
    let userData = getUserData();
    if(userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
        
    }
}

document.getElementById('logoutBtn').addEventListener('click', (ev) => {
    ev.preventDefault();
    logout();
    
    
    updateUserNav();
    //console.log('logout')
    page.redirect('/');
})