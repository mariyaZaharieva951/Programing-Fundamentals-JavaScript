import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteBook, getBookById, getLikesByBookId, getMyBooksLikes, likeBook } from '../api/data.js'
import {getUserData} from '../util.js'


let detailsTemplate = (book, isOwner, onDelete, likes, showLikeButton, onLike) => html `
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${bookControlsTemplates(book, isOwner, onDelete)}
            ${likeControlsTemplates(showLikeButton, onLike)}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`

let bookControlsTemplates = (book, isOwner, onDelete) => {
    if(isOwner) {
        return html `
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>
        `
    } else {
        return null
    }

}

let likeControlsTemplates = (showLikeButton, onLike) => {
    if(showLikeButton) {
        return html `<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
    } else {
        return null
    }
}

export async function detailsPage(ctx) {
    let userData = getUserData();
    //console.log(userData)
    //console.log(ctx)

    let book = await getBookById(ctx.params.id);
//console.log(book)
    let likes = await getLikesByBookId(ctx.params.id);
    let hasLike = null;
    
    userData ? hasLike = await getMyBooksLikes(ctx.params.id, userData.id) : 0
    //console.log(book,likes,hasLike)
    let isOwner = userData && userData.id == book._ownerId;
    let showLikeButton = isOwner == false && hasLike == false && userData !== null

    ctx.render(detailsTemplate(book, isOwner, onDelete, likes, showLikeButton, onLike))

    async function onDelete() {
        await deleteBook(ctx.params.id);
        ctx.page.redirect('/');
    }

    async function onLike() {
        await likeBook(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
 

}