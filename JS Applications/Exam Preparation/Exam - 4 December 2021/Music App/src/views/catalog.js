import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllCards } from '../api/data.js'
import { getUserData } from '../util.js';

let catalogTemplate = (cards,name) => html `
<section id="catalogPage">
    <h1>All Albums</h1>
    ${cards.length != 0 ?
        html `${cards.map(card => cardTemplate(card,name))}` :
        html `<p>No Albums in Catalog!</p>`}
</section>
`

let cardTemplate = (card,user) => html`
<div class="card-box">
        <img src=${card.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${card.name}</p>
                <p class="artist">Artist: ${card.artist}</p>
                <p class="genre">Genre: ${card.genre}</p>
                <p class="price">Price: ${card.price}</p>
                <p class="date">Release Date: ${card.releaseDate}</p>
            </div>
        </div>
        ${user != null ? 
            html `
            <div class="btn-group">
            <a href="/details/${card._id}" id="details">Details</a>
            </div>`:
        null}
</div>
`


export async function catalogPage(ctx) {
    let cards = await getAllCards();
    let user = getUserData();
    
    ctx.render(catalogTemplate(cards, user));
} 