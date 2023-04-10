
import {html} from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../util.js';
import { search } from '../api/data.js';


let searchTemplate = (searchAlbum) => html `
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click=${searchAlbum}>Search</button>
    </div>

    <h2>Results:</h2>


</section>
`

const resultTemplate = (searchAlbum,result,user) => html `
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click=${searchAlbum}>Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        <!--If have matches-->
        ${result.length > 0 ? html `
        ${result.map(el => html `
        <div class="card-box">
        <img src=${el.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">Name: ${el.name}</p>
                    <p class="artist">Artist: ${el.artist}</p>
                    <p class="genre">Genre: ${el.genre}</p>
                    <p class="price">Price: ${el.price}</p>
                    <p class="date">Release Date: ${el.releaseDate}</p>
                </div>
                ${user ? html `
                <div class="btn-group">
                    <a href="/details/${el._id}" id="details">Details</a>
                </div>
                `: null}
            </div>
            </div>
        `)}
        `: html `
        <!--If there are no matches-->
        <p class="no-result">No result.</p>
        `} 
    </div>
</section>
`

export function searchPage(ctx) {
    let user = getUserData();
    ctx.render(searchTemplate(searchAlbum));
    

    async function searchAlbum(ev) {
        ev.preventDefault();
        let input = document.getElementById('search-input');
        let result = await search(input.value);
        ctx.render(resultTemplate(searchAlbum,result,user))
    }


}