import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllShoes } from '../api/data.js';

let shoeTemplate = (shoe) => html `
<li class="card">
          <img src=${shoe.imageUrl} />
          <p>
            <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
          </p>
          <p>
            <strong>Model: </strong
            ><span class="model">${shoe.model}</span>
          </p>
          <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
          <a class="details-btn" href="/details/${shoe._id}">Details</a>
        </li>
`


let catalogTemplate = (shoes) => html `
<section id="dashboard">
      <h2>Collectibles</h2>
      <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${shoes.length > 0 ? html `
        ${shoes.map(shoeTemplate)}
        ` : html `
        <!-- Display an h2 if there are no posts -->
      <h2>There are no items added yet.</h2>
        `}
      </ul>
    </section>
`

export async function catalogPage(ctx) {
    let shoes = await getAllShoes();
    //console.log(pets)
    ctx.render(catalogTemplate(shoes))
}