import {html} from '../../node_modules/lit-html/lit-html.js'
import { createPet } from '../api/data.js';


let createTemplate = (onSubmit) => html `
<section id="createPage">
        <form @submit=${onSubmit} class="createForm">
            <img src="./images/cat-create.jpg">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>
`

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        //debugger
        let name = formData.get('name');
        let breed = formData.get('breed');
        let age = formData.get('age');
        let weight = formData.get('weight');
        let image = formData.get('image');

        if(name == '' || breed == '' || age == '' || weight == '' || image == '') {
            alert('Please, fill all fields!')
            return
        }

        await createPet({name,breed,age,weight,image});
        ctx.page.redirect('/')
    } 
}