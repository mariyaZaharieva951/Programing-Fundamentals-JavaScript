import { register } from '../api/data.js';
import { html } from '../lib.js'


const registerTemplate = (onSubmit, errorMsg) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                ${errorMsg ? html `<div class="form-group error">${errorMsg}</div>`: null}
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`

export function registerPage(ctx) {
    update();
    

    function update(errorMsg) {
        ctx.render(registerTemplate(onSubmit, errorMsg));
    }

    async function onSubmit(event) {
        event.preventDefault();
        //debugger
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('rePass').trim();

        try {
            if (email == '' || password == '') {
                throw new Error('All fields are required!')
            }
            if (password != repass) {
                throw new Error('Password don\'t match!')
            }

            await register(email, password)
            ctx.updateUserNav();
            ctx.page.redirect('/');
        } catch (err) {
            update(err.message)
        }
    }
}