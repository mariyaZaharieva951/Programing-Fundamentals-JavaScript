import {html} from '../../node_modules/lit-html/lit-html.js'
import { editPost, getPostById } from '../api/data.js';


let editTemplate = (onSubmit,post) => html `
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="${post.title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value="${post.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value="${post.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value="${post.address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value="${post.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`

export async function editPage(ctx) {
    let post = await getPostById(ctx.params.id);
    ctx.render(editTemplate(onSubmit,post));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let address = formData.get('address');
        let phone = formData.get('phone');

        if(title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
            alert('Please, fill all fields!')
            return
        }


        await editPost(ctx.params.id,{title,description,imageUrl,address,phone});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}