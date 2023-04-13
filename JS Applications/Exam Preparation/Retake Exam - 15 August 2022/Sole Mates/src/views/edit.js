import {html} from '../../node_modules/lit-html/lit-html.js'
import { editCard } from '../api/data.js';
import { getShoeById } from '../api/data.js';


let editTemplate = (onSubmit,shoe) => html `
<section id="edit">
      <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
          <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
            value=${shoe.brand}
          />
          <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
            value=${shoe.model}
          />
          <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
            value=${shoe.imageUrl}
          />
          <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
            value=${shoe.release}
          />
          <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
            value=${shoe.designer}
          />
          <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
            value=${shoe.value}
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
`

export async function editPage(ctx) {
    let shoe = await getShoeById(ctx.params.id);
    ctx.render(editTemplate(onSubmit,shoe));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
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

        await editCard(ctx.params.id,{brand,model,imageUrl,release,designer,value});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}