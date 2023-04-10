import {html} from '../../node_modules/lit-html/lit-html.js'
import { buyProduct, deleteProduct, getAllBoughtForProductById, getAllBoughtForProductByIdForUser, getProductById } from '../api/data.js';
import { getUserData } from '../util.js';

let detailsTemplate = (product,user,onDelete,hasBought,buy,boughts) => html `
<section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
          Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
          Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Bought: <span id="buys">${boughts}</span> times.</h4>
            <span
              >${product.description}</span
            >
          </div>
        </div>
        ${check(product,user,onDelete,hasBought,buy)}
      </div>
    </section>
`

function check(product,user,onDelete,hasBought,buy) {
    

        if(user && user.id == product._ownerId) {
            return html `
            <div id="action-buttons">
          <a href="/edit/${product._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
        </div>
            `
        } else if(!hasBought) {
            return html `
            <div id="action-buttons">
        <a @click=${buy} 
        href="javascript:void(0)" id="buy-btn" >Buy</a>
        </div>
            `
        } else if(hasBought) {
          return html ``
        }
}

export async function detailsPage(ctx) {
    let product = await getProductById(ctx.params.id); //_ownerId
    let user = await getUserData(); //id
    let boughts = await getAllBoughtForProductById(ctx.params.id);

    let countForUserBought = 0;
    if(user) {
        countForUserBought = await getAllBoughtForProductByIdForUser(ctx.params.id,user._id);
    }
    const hasBought = countForUserBought > 0;
    //console.log(user,product)
    ctx.render(detailsTemplate(product,user,onDelete,hasBought,buy,boughts))

    async function onDelete(ev) {
        ev.preventDefault()
        await deleteProduct(ctx.params.id);

        ctx.page.redirect('/')
    }

    async function buy(ev) {
      ev.preventDefault();
      buyProduct(product._id);
      ev.target.style.display = 'none';
      ctx.page.redirect(`/details/${ctx.params.id}`)
    }

    
        
    
}