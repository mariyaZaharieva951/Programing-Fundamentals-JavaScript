import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllOffers } from '../api/data.js';


let offerTemplate = (offer) => html `
<div class="offer">
      <img src=${offer.imageUrl} />
      <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
      </p>
      <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
      <a class="details-btn" href="/details/${offer._id}">Details</a>
    </div>
`


let catalogTemplate = (offers) => html `
<section id="dashboard">
    <h2>Job Offers</h2>
    <!-- Display a div with information about every post (if any)-->
    ${offers.length > 0 ? html `
    ${offers.map(offer => offerTemplate(offer))}
    `: html `
    <!-- Display an h2 if there are no posts -->
    <h2>No offers yet.</h2>
    `}
  </section>
`

export async function catalogPage(ctx) {
    let offers = await getAllOffers();
    ctx.render(catalogTemplate(offers))
}