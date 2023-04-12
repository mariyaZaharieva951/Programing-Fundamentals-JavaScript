import {html} from "../../node_modules/lit-html/lit-html.js"
import { getAllBooks } from "../api/data.js"
import {bookTemplate} from "./common.js"

const catalogTemplate = (books) => html `
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length == 0 ? html `
    <p class="no-books">No books in database!</p>`:
    html`
    <ul class="other-books-list">
    ${books.map(bookTemplate)}
    </ul>
    `
    }
</section>
`

export async function catalogPage(ctx) {
    let books = await getAllBooks();
    ctx.render(catalogTemplate(books));

}