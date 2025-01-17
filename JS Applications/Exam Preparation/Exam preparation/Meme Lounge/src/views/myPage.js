import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllMemes, getMyMemes } from '../api/data.js';
import { getUserData } from '../util.js';


let memeTemplate = (meme) => html `
<div class="user-meme">
                    <p class="user-meme-title">${meme.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                    <a class="button" href="/details/${meme._id}">Details</a>
                </div>
`


let myPageTemplate = (memes,user) => html `
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                ${memes.length > 0 ? html `
                ${memes.map(memeTemplate)}
                `: html `
                <!-- Display : If user doesn't have own memes  --> 
                <p class="no-memes">No memes in database.</p>
                `} 
            </div>
        </section>
`


export async function myPage(ctx) {
    let user = getUserData();
    
    //console.log(user)
    let memes = await getMyMemes(user.id);
    //console.log(memes)
    ctx.render(myPageTemplate(memes,user))
}