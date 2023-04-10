import {html} from '../../node_modules/lit-html/lit-html.js'
import { createProduct } from '../api/data.js';


let createTemplate = (onSubmit) => html `
<section id="create">
      <div class="form">
        <h2>Add Product</h2>
        <form @submit=${onSubmit} class="create-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
          />
          <input
            type="text"
            name="imageUrl"
            id="product-image"
            placeholder="Product Image"
          />
          <input
            type="text"
            name="category"
            id="product-category"
            placeholder="Category"
          />
          <textarea
            id="product-description"
            name="description"
            placeholder="Description"
            rows="5"
            cols="50"
          ></textarea>
          
          <input
            type="text"
            name="price"
            id="product-price"
            placeholder="Price"
          />

          <button type="submit">Add</button>
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
        let name = formData.get('name');
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        let description = formData.get('description');
        let price = formData.get('price');

        if(name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
            alert('Please, fill all fields!')
            return
        }

        await createProduct({name,imageUrl,category,description,price});
        ctx.page.redirect('/products')
    } 
}