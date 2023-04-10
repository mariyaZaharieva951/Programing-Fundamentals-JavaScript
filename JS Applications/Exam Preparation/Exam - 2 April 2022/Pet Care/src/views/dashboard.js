import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllPets } from '../api/data.js';

let petTemplate = (currentPet) => html `
<div class="animals-board">
                <article class="service-img">
                    <img class="animal-image-cover" src=${currentPet.image}>
                </article>
                <h2 class="name">${currentPet.name}</h2>
                <h3 class="breed">${currentPet.breed}</h3>
                <div class="action">
                    <a class="btn" href="/details/${currentPet._id}">Details</a>
                </div>
            </div>
`


let catalogTemplate = (pets) => html `
<section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
            ${pets.length > 0 ? html `
            ${pets.map(pet => petTemplate(pet))}
            ` : html `
            <div>
                <p class="no-pets">No pets in dashboard</p>
            </div>
            `}
        </div>
    </section>
`

export async function catalogPage(ctx) {
    let pets = await getAllPets();
    //console.log(pets)
    ctx.render(catalogTemplate(pets))
}