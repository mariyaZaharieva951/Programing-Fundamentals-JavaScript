import {html} from '../../node_modules/lit-html/lit-html.js'
import { editMeme, getMemeById } from '../api/data.js';



let editTemplate = (onSubmit,meme) => html `
<section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">
                    ${meme.description} </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`

export async function editPage(ctx) {
    let meme = await getMemeById(ctx.params.id);
    //console.log(ctx)
    ctx.render(editTemplate(onSubmit,meme));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        if(title == '' || description == ''  || imageUrl == '') {
            alert('Please, fill all fields!')
            return
        }

        await editMeme(ctx.params.id,{title,description,imageUrl});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}