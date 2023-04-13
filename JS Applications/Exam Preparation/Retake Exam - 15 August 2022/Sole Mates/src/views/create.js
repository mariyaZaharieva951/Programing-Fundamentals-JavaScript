import {html} from '../../node_modules/lit-html/lit-html.js'
import { createCard } from '../api/data.js';


let createTemplate = (onSubmit) => html `
<section id="create">
      <div class="form">
        <h2>Add item</h2>
        <form @submit=${onSubmit} class="create-form">
          <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
          />
          <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
          />
          <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
          />
          <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
          />
          <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
          />
          <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
`

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        //debugger
        let brand = formData.get('brand');
        let model = formData.get('model');
        let imageUrl = formData.get('imageUrl');
        let release = formData.get('release');
        let designer = formData.get('designer');
        let value = formData.get('value');

        if(brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            alert('Please, fill all fields!')
            return
        }

        await createCard({brand,model,imageUrl,release,designer,value});
        ctx.page.redirect('/')
    } 
}