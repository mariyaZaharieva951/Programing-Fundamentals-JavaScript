import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteAlbum, getAlbumById, getLikes, getUserLikes, makeLikes} from '../api/data.js';
import { getUserData } from '../util.js';


let detailsTemplate = (currentAlbum,user,onDelete,likes,onLike,userLikes) => html `
<section id="details">
      <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
          <img src=${currentAlbum.imageUrl} />
        </div>
        <div id="info-wrapper">
          <p><strong>Band:</strong><span id="details-singer">${currentAlbum.singer}</span></p>
          <p>
            <strong>Album name:</strong><span id="details-album">${currentAlbum.album}</span>
          </p>
          <p><strong>Release date:</strong><span id="details-release">${currentAlbum.release}</span></p>
          <p><strong>Label:</strong><span id="details-label">${currentAlbum.label}</span></p>
          <p><strong>Sales:</strong><span id="details-sales">${currentAlbum.sales}</span></p>
        </div>
        <div id="likes">Likes: ${likes}<span id="likes-count"></span></div>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${user && user.id == currentAlbum._ownerId ? html `
          <a href="/edit/${currentAlbum._id}" id="edit-btn">Edit</a>
          <a href="/delete" @click=${onDelete} id="delete-btn">Delete</a>
          ` : null}
          ${user && user.id !== currentAlbum._ownerId && userLikes == 0 ? html `
          <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>
          ` : null}
        </div>
      </div>
    </section>
`

export async function detailsPage(ctx) {
    let album = await getAlbumById(ctx.params.id); //owner
    let user = await getUserData(); //id
    let likes = await getLikes(ctx.params.id)
  

    if(user) {
      let userLikes = await getUserLikes(ctx.params.id,user.id);
      console.log(userLikes)
      ctx.render(detailsTemplate(album,user,onDelete,likes,onLike,userLikes))
    } else {
      ctx.render(detailsTemplate(album,user,onDelete,likes,onLike))
    }

    async function onDelete(ev) {
        ev.preventDefault()
        await deleteAlbum(ctx.params.id);
        ctx.page.redirect('/')
    }
    
    function onLike(ev) {
        ev.preventDefault();
        makeLikes(album._id);
        document.getElementById('likes-count').style.display = 'none';
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
    
}