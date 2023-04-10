import {html} from '../../node_modules/lit-html/lit-html.js'
import { editPet, getPetById } from '../api/data.js';
import { getUserData } from '../util.js';


let editTemplate = (onSubmit,pet) => html `
<section id="editPage">
        <form @submit=${onSubmit} class="editForm">
            <img src=${pet.image}>
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" value=${pet.name}>
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" value=${pet.breed}>
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" value=${pet.age}>
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" value=${pet.weight}>
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" value=${pet.image}>
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>
`

export async function editPage(ctx) {
    let pet = await getPetById(ctx.params.id);
    ctx.render(editTemplate(onSubmit,pet));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
        let name = formData.get('name');
        let breed = formData.get('breed');
        let age = formData.get('age');
        let weight = formData.get('weight');
        let image = formData.get('image');

        if(name == '' || breed == '' || age == '' || weight == '' || image == '') {
            alert('Please, fill all fields!')
            return
        }

        await editPet(ctx.params.id,{name,breed,age,weight,image});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}