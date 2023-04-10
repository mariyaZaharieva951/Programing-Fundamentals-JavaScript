import {logout} from '../api/data.js'

export function logoutPage(ctx) {
    
    logout();
    ctx.page.redirect('/');
    
}
