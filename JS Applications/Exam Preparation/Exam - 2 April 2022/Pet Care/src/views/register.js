import {html} from '../../node_modules/lit-html/lit-html.js'
import { register } from '../api/data.js';



let registerTemplate = (onSubmit) => html `
<section id="registerPage">
        <form @submit=${onSubmit} class="registerForm">
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>

            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>

            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>

            <button class="btn" type="submit">Register</button>

            <p class="field">
                <span>If you have profile click <a href="#">here</a></span>
            </p>
        </form>
    </section>
`

export async function registerPage(ctx) {
    //console.log(ctx.render)
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(form);
        //debugger
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