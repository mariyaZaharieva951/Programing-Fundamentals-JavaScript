import {html} from '../../node_modules/lit-html/lit-html.js'

export const navigationTemplate = (user,content) => html `
<header>
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo">
        </section>
        <ul>
        ${user ? html `
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Dashboard</a></li>
            <li><a href="/create">Create Postcard</a></li>
            <li><a href="/logout">Logout</a></li>
        ` : html `
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Dashboard</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        `}
        </ul>
    </nav>
</header>
<main id="content">
${content}
</main>
`