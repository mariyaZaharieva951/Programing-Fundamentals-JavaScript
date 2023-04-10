import {html} from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';


let loginTeplate = (onSubmit) => html `
<section id="loginPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`

export function loginPage(ctx) {
    ctx.render(loginTeplate(onSubmit));
    

    async function onSubmit(ev) {
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');

        if(email == '' || password == '') {
            return alert('Please, fill all fields!')
        }

        await login(email,password);

        form.reset();
        ctx.page.redirect('/');
    }
} 