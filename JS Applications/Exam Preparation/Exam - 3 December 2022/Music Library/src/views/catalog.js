import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllAlbums } from '../api/data.js';


let albumTemplate = (currentAlbum) => html `
<li class="card">
    <img src=${currentAlbum.imageUrl} alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${currentAlbum.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${currentAlbum.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${currentAlbum.sales}</span></p>
    <a class="details-btn" href="/details/${currentAlbum._id}">Details</a>
  </li>
`


let catalogTemplate = (albums) => html `
<section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
${albums.length > 0 ? html `
${albums.map(album => albumTemplate(album))}
` : html `
<!-- Display an h2 if there are no posts -->
<h2>There are no albums added yet.</h2>
`}
</ul>
</section>

`

export async function catalogPage(ctx) {
    let albums = await getAllAlbums();
    //console.log(albums)
    ctx.render(catalogTemplate(albums))
}