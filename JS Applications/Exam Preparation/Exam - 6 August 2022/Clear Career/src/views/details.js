import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteOffer, getApplications, getOfferById, getUserApplications, makeApplication } from '../api/data.js';
import { getUserData } from '../util.js';

let detailsTemplate = (offer,user,onDelete,applications,userApplications,onApply) => html `
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">
        Category: <span id="categories">${offer.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${offer.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">${applications}</strong></p>
    ${user && user.id === offer._ownerId ? html `
    <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
        </div>
    `: null}
    ${user && user.id != offer._ownerId && userApplications == 0 ? html `
    <!--Bonus - Only for logged-in users ( not authors )-->
    <div id="action-buttons">
        <a href="javascript:void(0)" @click=${onApply} id="apply-btn">Apply</a>
        </div>  
    `: null}   

    </div>
  </section>
`

export async function detailsPage(ctx) {
    let offer = await getOfferById(ctx.params.id); //_ownerId
    let applications = await getApplications(offer._id);

    let user = await getUserData(); //id
    let userApplications = await getUserApplications(offer._id,user.id)

    ctx.render(detailsTemplate(offer,user,onDelete,applications,userApplications,onApply))

    async function onDelete(ev) {
        ev.preventDefault()
        await deleteOffer(ctx.params.id);

        ctx.page.redirect('/')
    }
        
    async function onApply(ev) {
        ev.preventDefault();
        makeApplication(offer._id);
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
    
}