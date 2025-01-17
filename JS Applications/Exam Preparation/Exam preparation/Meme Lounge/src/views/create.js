import {html} from '../../node_modules/lit-html/lit-html.js'
import { createMeme } from '../api/data.js';


let createTemplate = (onSubmit) => html `
<section id="create-meme">
            <form @submit=${onSubmit} id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
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

        if(title == '' || description == ''  || imageUrl == '') {
            alert('Please, fill all fields!')
            return
        }

        await createMeme({title,description,imageUrl});
        ctx.page.redirect('/catalog')
    } 
}