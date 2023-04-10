import {html} from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';


let registerTemplate = (onSubmit) => html `
<section id="registerPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`

export function registerPage(ctx) {
    console.log('register')
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('conf-pass');

        if(email == '' || password == '') {
            return alert('Please, fill all fields!')
        }
        if(password !== rePass) {
            return alert('Passwords don`t match!')
        }

        await register(email,password);

        form.reset();
        ctx.page.redirect('/');
    }
} 