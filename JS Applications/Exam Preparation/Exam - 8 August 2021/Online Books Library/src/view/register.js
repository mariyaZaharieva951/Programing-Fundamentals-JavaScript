import {html} from '../../node_modules/lit-html/lit-html.js';
import {register} from '../api/data.js'

let registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(ev.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPass = formData.get('confirm-pass');

        if(email == '' || password == "") {
            alert('Please, fill all fields!')
            return
        }
        if(password !== confirmPass) {
            alert('Passwords don`t match!')
            return
        } 
        await register(email,password);

        form.reset();
        ctx.updateUserNav();
        ctx.page.redirect('/')
    }
}