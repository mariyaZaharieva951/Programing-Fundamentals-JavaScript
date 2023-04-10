import { html, render } from '../../node_modules/lit-html/lit-html.js'


let guestLinks = html`
<li><a href="/catalog">Catalog</a></li>
<li><a href="/search">Search</a></li>
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>
`
let userLiks = html`
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    <li><a href="/create">Create Album</a></li>
    <li><a href="/logout" id="logout">Logout</a></li>
`

let navigationTemplate = (user) => html`
<nav>
<img src="./images/headphones.png">
<a href="/">Home</a>
<ul>
   ${user ? userLiks : guestLinks} 
</ul>
</nav>
`

export function navigationBar(ctx) {
    return navigationTemplate(ctx.user);
}