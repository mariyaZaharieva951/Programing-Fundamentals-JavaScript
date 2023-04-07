import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllMyPosts } from '../api/data.js';
import { getUserData } from '../util.js';

let postTemplate = (post) => html `
<div class="post">
            <h2 class="post-title">${post.title}</h2>
            <img class="post-image" src=${post.imageUrl}>
            <div class="btn-wrapper">
                <a href="/details/${post._id}" class="details-btn btn">Details</a>
            </div>
        </div>
`

let myPostTemplate = (myPosts) => html `
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts">
    ${myPosts.length > 0 ? html `
    ${myPosts.map(post => postTemplate(post))}
    ` : html `
    <!-- Display an h1 if there are no posts -->
    <h1 class="title no-posts-title">You have no posts yet!</h1>
    `}   
    </div>
</section>
`

export async function mypostsPage(ctx) {
    //let post = await getPost(ctx.params.id); //_ownerId
    let user = await getUserData(); //id
    let myposts = await getAllMyPosts(user.id)
    ctx.render(myPostTemplate(myposts))

    
        
    
}