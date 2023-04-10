import {html} from '../../node_modules/lit-html/lit-html.js'
import { editAlbum, getAlbumById } from '../api/data.js';
import { getUserData } from '../util.js';



let editTemplate = (onSubmit,currentAlbum) => html `
<section id="edit">
      <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onSubmit} class="edit-form">
          <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${currentAlbum.singer} />
          <input type="text" name="album" id="album-album" placeholder="Album" value=${currentAlbum.album} />
          <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${currentAlbum.imageUrl} />
          <input type="text" name="release" id="album-release" placeholder="Release date" value=${currentAlbum.release} />
          <input type="text" name="label" id="album-label" placeholder="Label" value=${currentAlbum.label} />
          <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${currentAlbum.sales} />
          <button type="submit">post</button>
        </form>
      </div>
    </section>
`

export async function editPage(ctx) {
    //console.log(ctx)
    let album = await getAlbumById(ctx.params.id);
    ctx.render(editTemplate(onSubmit,album));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
        let singer = formData.get('singer');
        let album = formData.get('album');
        let imageUrl = formData.get('imageUrl');
        let release = formData.get('release');
        let label = formData.get('label');
        let sales = formData.get('sales');

        if(singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            alert('Please, fill all fields!')
            return
        }

        await editAlbum(ctx.params.id,{singer,album,imageUrl,release,label,sales});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}