import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import { getUserData } from './util.js';
import { navigationBar } from './views/navigation.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { logoutPage } from './views/logout.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';


let root = document.getElementById('main-content');
let head = document.querySelector('.header-navigation')

page(updateNav);
page(decorateContext);
page(renderNavigation)

page.start();

page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/logout', logoutPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage)




function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next()
}

function renderNavigation(ctx, next) {
    render(navigationBar(ctx), head);
    next();
}

function updateNav(ctx,next) {
    ctx.user = getUserData();
    next();
}



