import {html} from '../../node_modules/lit-html/lit-html.js'
import { search } from '../api/data.js'
import { getUserData } from '../util.js'

let searchTemplate = (searchShoe) => html `
<section id="search">
      <h2>Search by Brand</h2>

      <form class="search-wrapper cf">
        <input
          id="#search-input"
          type="text"
          name="search"
          placeholder="Search here..."
          required
        />
        <button type="submit" @click=${searchShoe}>Search</button>
      </form>

      <h3>Results:</h3>

    </section>
`

let resultTemplate = (searchShoe,result,user) => html `
<section id="search">
      <h2>Search by Brand</h2>

      <form class="search-wrapper cf">
        <input
          id="#search-input"
          type="text"
          name="search"
          placeholder="Search here..."
          required
        />
        <button type="submit" @click=${searchShoe}>Search</button>
      </form>

      <h3>Results:</h3>

      <div id="search-container">
        <ul class="card-wrapper">
          <!-- Display a li with information about every post (if any)-->
          ${result.length > 0 ? html `
          ${result.map(el => html `
          <li class="card">
          <img src=${el.imageUrl} />
          <p>
            <strong>Brand: </strong><span class="brand">${el.brand}</span>
          </p>
          <p>
            <strong>Model: </strong
            ><span class="model">${el.model}</span>
          </p>
          <p><strong>Value:</strong><span class="value">${el.value}</span>$</p>
          ${user ? html `
          <a class="details-btn" href="/details/${el._id}">Details</a>`: null}
        </li>
          `)}
          `: html `
          <!-- Display an h2 if there are no posts -->
        <h2>There are no results found.</h2> 
          `} 
        </ul>
      </div>
    </section>
`

export function searchPage(ctx) {
    let user = getUserData()
    ctx.render(searchTemplate(searchShoe))

    async function searchShoe(ev) {
        ev.preventDefault();
        let input = document.getElementById('#search-input');
        let result = await search(input.value);
        ctx.render(resultTemplate(searchShoe,result,user))
    }
    
}