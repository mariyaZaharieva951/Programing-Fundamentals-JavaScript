import {html} from '../../node_modules/lit-html/lit-html.js'


export const navigationTemplate = (user,content) => html `
<header>
    <nav>
    <a href="/catalog">All Memes</a>
    ${user ? html `
    <!-- Logged users -->
   <div class="user">
       <a href="/create">Create Meme</a>
       <div class="profile">
           <span>Welcome, ${user.email}</span>
           <a href="/myPage">My Profile</a>
           <a href="/logout">Logout</a>
       </div>
   </div>
    `: html `
    <!-- Guest users -->
   <div class="guest">
       <div class="profile">
           <a href="/login">Login</a>
           <a href="/register">Register</a>
       </div>
       <a class="active" href="/">Home Page</a>
   </div>
    `} 
    </nav>
</header>
<main id="content">
${content}
</main>
`