import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import {navigationTemplate} from '../src/views/navigation.js'
import { logout } from './api/data.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { catalogPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

let root = document.querySelector('body');

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);







page.start();


function decorateContext(ctx,next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    let user = getUserData()
    
    render(navigationTemplate(user,content),root)
}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/')

}