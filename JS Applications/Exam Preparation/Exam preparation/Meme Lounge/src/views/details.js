import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteMeme, getMemeById } from '../api/data.js';
import { getUserData } from '../util.js';


let detailsTemplate = (meme,user,onDelete) => html `
<section id="meme-details">
            <h1>Meme Title: ${meme.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>
                    ${user && user.id == meme._ownerId ? html `
                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    <a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>
                    `: null}
                </div>
            </div>
        </section>
`

export async function detailsPage(ctx) {
    let meme = await getMemeById(ctx.params.id); //_ownerId
    let user = await getUserData(); //id
    console.log(user)
    ctx.render(detailsTemplate(meme,user,onDelete))

    async function onDelete(ev) {
        ev.preventDefault();
        let choice = confirm('Are you sure to delete?');
        if(choice) {
            deleteMeme(ctx.params.id);
            ctx.page.redirect('/catalog')
        }
        
    }
        
    
}