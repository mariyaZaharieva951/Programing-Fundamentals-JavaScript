import {html} from '../../node_modules/lit-html/lit-html.js'
import { login } from '../api/data.js';



let loginTemplate = (onSubmit) => html `
<section id="login">
            <form @submit=${onSubmit} id="login-form">
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`

export async function loginPage(ctx) {
    //console.log(ctx.render)
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(form);
        //debugger
        let email = formData.get('email');
        
        let password = formData.get('password');

        if(email == '' || password == '') {
            alert('Please, fill all fields!')
            return
        }

        await login(email,password);
        
        ctx.page.redirect('/catalog')
    }
}