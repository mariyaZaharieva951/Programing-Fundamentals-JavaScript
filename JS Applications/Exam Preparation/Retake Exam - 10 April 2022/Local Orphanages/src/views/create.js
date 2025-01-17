import {html} from '../../node_modules/lit-html/lit-html.js'
import { createPost } from '../api/data.js';

let createTemplate = (onSubmit) => html `
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>
`

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        //debugger
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let address = formData.get('address');
        let phone = formData.get('phone');

        if(title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
            alert('Please, fill all fields!')
            return
        }

        await createPost({title,description,imageUrl,address,phone});
        ctx.page.redirect('/')
    } 
}