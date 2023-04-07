import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllPosts } from '../api/data.js';


let postTemplate = (currentPost) => html `
        <div class="post">
            <h2 class="post-title">${currentPost.title}</h2>
            <img class="post-image" src=${currentPost.imageUrl}>
            <div class="btn-wrapper">
                <a href="/details/${currentPost._id}" class="details-btn btn">Details</a>
            </div>
        </div>
    
`

let catalogTemplate = (posts) => html `
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
    <!-- Display a div with information about every post (if any)-->
    ${posts.length > 0 ? html `
    ${posts.map(postTemplate)}
    ` : html `
    <!-- Display an h1 if there are no posts -->
    <h1 class="title no-posts-title">No posts yet!</h1>
    `}
    </div>
</section>

`

export async function catalogPage(ctx) {
    let posts = await getAllPosts();
    //console.log(pets)
    ctx.render(catalogTemplate(posts))
}