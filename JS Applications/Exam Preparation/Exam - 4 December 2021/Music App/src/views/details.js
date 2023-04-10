import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteCard, getMyCard } from '../api/data.js';
import { getUserData } from '../util.js'


let detailsTemplate = (card,user,onDelete) => html `
<section id="detailsPage">
    <div class="wrapper">
  <div class="albumCover">
            <img src=${card.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${card.name}</h1>
                <h3>Artist: ${card.artits}</h3>
                <h4>Genre: ${card.genre}</h4>
                <h4>Price: ${card.price}</h4>
                <h4>Date: ${card.date}</h4>
                <p>Description: ${card.description}</p>
            </div>
            ${user.id == card._ownerId ? html `
            <div class="actionBtn">
                <a href="/edit/${card._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>` :
            null}
            
        </div>
    </div>
</section>
`

export async function detailsPage(ctx) {
    //console.log(ctx.params.id)
    let user = await getUserData();
    let myCadr = await getMyCard(ctx.params.id);
    //console.log(myCadr)
    ctx.render(detailsTemplate(myCadr,user, onDelete));

    async function onDelete(ev) {
        ev.preventDefault();
        await deleteCard(ctx.params.id)
        ctx.page.redirect('/catalog')
    }
    
}