import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteCard, getShoeById } from '../api/data.js';
import { getUserData } from '../util.js';


let detailsTemplate = (shoe,user,onDelete) => html `
<section id="details">
      <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
          <img src=${shoe.imageUrl} />
        </div>
        <div id="info-wrapper">
          <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
          <p>
            Model: <span id="details-model">${shoe.model}</span>
          </p>
          <p>Release date: <span id="details-release">${shoe.release}</span></p>
          <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
          <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>
        ${user && user.id == shoe._ownerId ? html `
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
        </div>
        `: null}
      </div>
    </section>
`

export async function detailsPage(ctx) {
    let shoe = await getShoeById(ctx.params.id); //_ownerId

    let user = await getUserData(); //id
    //console.log(pet,user)
    ctx.render(detailsTemplate(shoe,user,onDelete))

    async function onDelete(ev) {
        ev.preventDefault()
        await deleteCard(ctx.params.id);

        ctx.page.redirect('/')
    }
        
    
}