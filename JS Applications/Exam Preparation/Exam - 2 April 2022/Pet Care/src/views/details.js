import {html} from '../../node_modules/lit-html/lit-html.js'
import { deletePet, getDonations, getPetById, getUserDonations, makeDonate } from '../api/data.js'
import { getUserData } from '../util.js';

let detailsTemplate = (pet,user,donations,onDelete,donate,userDonation) => html `
<section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${pet.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${donations}$</h4>
                </div>
                    ${user && user.id == pet._ownerId ? html `
                    <!-- Only for registered user and creator of the pets-->
                    <div class="actionBtn">
                    <a href="/edit/${pet._id}" class="edit">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
                    </div>` : null}
                    ${user && user.id !== pet._ownerId && userDonation == 0 ? html `
                    <div class="actionBtn">
                    <!--(Bonus Part) Only for no creator and user-->
                    <a href="javascript:void(0)"  class="donate" @click=${donate}>Donate</a>
                    </div>`: null} 
            </div>
        </div>
    </section>
`

export async function detailsPage(ctx) {
    let pet = await getPetById(ctx.params.id);
    let user = await getUserData();
    let donations = await getDonations(ctx.params.id) * 100;
    

    if(user) {
        const userDonation = await getUserDonations(ctx.params.id,user.id);
        ctx.render(detailsTemplate(pet,user,donations,onDelete,donate,userDonation))
    } else {ctx.render(detailsTemplate(pet,user,donations,onDelete,donate))}


    async function onDelete(ev) {
        ev.preventDefault()
        let choise = confirm('Are you sure to delete?');
        if(choise) {
            deletePet(ctx.params.id);
            ctx.page.redirect('/')
        }
        
    }
        
    function donate(ev) {
        ev.preventDefault();
        makeDonate(pet._id);
        document.querySelector('.donation').style.display = 'none';
        ctx.page.redirect(`/details/${ctx.params.id}`)

    }
}