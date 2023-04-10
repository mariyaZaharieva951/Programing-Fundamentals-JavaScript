import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { navigationTemplate } from './views/navigation.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js'
import { createPage } from './views/create.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

let root = document.getElementById('wrapper');

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/create', createPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage)







page.start();


function decorateContext(ctx,next) {
    ctx.render = renderView;
    ctx.donation = 0;
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