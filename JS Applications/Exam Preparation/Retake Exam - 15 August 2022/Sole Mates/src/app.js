import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/data.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { catalogPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { navigationTemplate } from './views/navigation.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';


let root = document.querySelector('#wrapper');

page(decorateContext);
page('/', homePage);
page('/logout', logoutAction);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage);







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