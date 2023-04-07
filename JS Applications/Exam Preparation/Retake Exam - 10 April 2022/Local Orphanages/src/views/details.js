import {html} from '../../node_modules/lit-html/lit-html.js'
import { deletePost, getDonations, getPostById, getUserDonations, makeDonate } from '../api/data.js';
import { getUserData } from '../util.js';


let detailsTemplate = (post,user,donations,onDelete,donate,userDonation) => html `
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>
                <div class="btns">
                ${(user && user.id == post._ownerId) ? html`
                    <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>
                `: html `
                ${userDonation == 0 ? html `
                    <a href="javascript:void(0)" class="donate-btn btn" @click=${donate}">Donate</a>
                    `: null}
                    `}
                </div>
            </div>
        </div>
    </div>
</section>
`

export async function detailsPage(ctx) {
    let post = await getPostById(ctx.params.id); //_ownerId
    let user = await getUserData(); //id
    let donations = await getDonations(ctx.params.id)
    console.log(user)
    

    if(user) {
        //post.isOwner = post._ownerId == user._id;
        //console.log(post.isOwner)
        const userDonation = await getUserDonations(ctx.params.id,user.id);
        //debugger
        ctx.render(detailsTemplate(post,user,donations,onDelete,donate,userDonation))
    } else { ctx.render(detailsTemplate(post,user,donations,onDelete,donate))}
   

    async function onDelete(ev) {
        ev.preventDefault();
        let choice = confirm('Are you sure delete?');
        
        if(choice){
        deletePost(ctx.params.id);
        ctx.page.redirect('/')
        }
        
    }
    async function donate(ev) {
        ev.preventDefault();
        makeDonate(post._id);
        document.querySelector('.donate-btn btn').style.display = 'none';
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
        
    
}