import {html} from '../../node_modules/lit-html/lit-html.js'
import { login } from '../api/data.js';



let loginTemplate = (onSubmit) => html `
<section id="login">
<div class="form">
  <h2>Login</h2>
  <form @submit=${onSubmit} class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
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

        ctx.page.redirect('/')
    }
}