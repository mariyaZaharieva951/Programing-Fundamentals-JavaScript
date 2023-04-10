import {html} from '../../node_modules/lit-html/lit-html.js'
import { editCard, getMyCard } from '../api/data.js'
import { getUserData } from '../util.js';

let editTemplate = (onSubmit,card,user) => html `
<section class="editPage">
    <form @submit = ${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value=${card.name}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value=${card.imgUrl}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value=${card.price}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value=${card.releaseDate}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value=${card.artist}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value=${card.genre}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10"
                    cols="10">${card.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>
`

export async function editPage(ctx) {
    let card = await getMyCard(ctx.params.id);
    //console.log(card) //ownerID
    let user = await getUserData();
    //console.log(user) //id
    ctx.render(editTemplate(onSubmit,card,user));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);

        let name = formData.get('name');
        let imgUrl = formData.get('imgUrl');
        let price = formData.get('price');
        let releaseDate = formData.get('releaseDate');
        let artist = formData.get('artist');
        let genre = formData.get('genre');
        let description = formData.get('description');

        if(name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
            return alert('Please, fill all fields!')
        }

        let response = await editCard(ctx.params.id,{name, imgUrl, price, releaseDate, artist, genre, description});
        console.log(response)
        form.reset();
        ctx.page.redirect('/catalog')
    }
}