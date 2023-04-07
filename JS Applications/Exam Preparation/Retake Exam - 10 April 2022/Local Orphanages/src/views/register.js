import {html} from '../../node_modules/lit-html/lit-html.js'
import { register } from '../api/data.js';

let registerTemplate = (onSubmit) => html `
<section id="register-page" class="auth">
    <form @submit=${onSubmit} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('repeatPassword')

        if(email == '' || password == '') {
            alert('Please, fill all fields!')
            return
        }
        if(password != rePass) {
            alert('Please, paswords don`t match')
            return
        }

        await register(email,password,rePass);

        ctx.page.redirect('/')
    }
}