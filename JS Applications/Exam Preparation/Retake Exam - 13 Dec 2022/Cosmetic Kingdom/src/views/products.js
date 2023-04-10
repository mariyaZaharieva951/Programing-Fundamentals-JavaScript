import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllProducts } from '../api/data.js';


let productTemplate = (product) => html `
<div class="product">
        <img src=${product.imageUrl} />
        <p class="title">
          ${product.name}
        </p>
        <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
        <a class="details-btn" href="/details/${product._id}">Details</a>
      </div>
`


let catalogTemplate = (products) => html `
<h2>Products</h2>
    <section id="dashboard">
    ${products.length > 0 ? html `
    ${products.map(productTemplate)}
    ` : html `
    <h2>No products yet.</h2>
    `}
    
    </section>
`

export async function catalogPage(ctx) {
    let products = await getAllProducts();
    //console.log(products)
    ctx.render(catalogTemplate(products))
}


