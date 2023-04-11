import {html} from '../../node_modules/lit-html/lit-html.js'
import { register } from '../api/data.js';



let registerTemplate = (onSubmit) => html `
<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onSubmit} class="login-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
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
        let rePass = formData.get('re-password')

        if(email == '' || password == '') {
            alert('Please, fill all fields!')
            return
        }
        if(password != rePass) {
            alert('Please, paswords don`t match')
            return
        }

        await register(email,password);

        ctx.page.redirect('/catalog')
    }
}