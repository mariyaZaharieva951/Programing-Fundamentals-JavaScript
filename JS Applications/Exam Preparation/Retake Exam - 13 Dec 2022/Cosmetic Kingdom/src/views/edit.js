import {html} from '../../node_modules/lit-html/lit-html.js'
import { editProduct, getProductById } from '../api/data.js';



let editTemplate = (onSubmit,product) => html `
<section id="edit">
<div class="form">
  <h2>Edit Product</h2>
  <form @submit=${onSubmit} class="edit-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Product Name"
      value=${product.name}
    />
    <input
      type="text"
      name="imageUrl"
      id="product-image"
      placeholder="Product Image"
      value=${product.imageUrl}
    />
    <input
      type="text"
      name="category"
      id="product-category"
      placeholder="Category"
      value=${product.category}
    />
    <textarea
      id="product-description"
      name="description"
      placeholder="Description"
      rows="5"
      cols="50"
    >${product.description}</textarea>
    
    <input
      type="text"
      name="price"
      id="product-price"
      placeholder="Price"
      value=${product.price}
    />
    <button type="submit">post</button>
  </form>
</div>
</section>
`

export async function editPage(ctx) {
    let product = await getProductById(ctx.params.id);
    console.log(ctx,product)
    ctx.render(editTemplate(onSubmit,product));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
        let name = formData.get('name');
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        let description = formData.get('description');
        let price = formData.get('price');

        if(name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
            alert('Please, fill all fields!')
            return
        }

        await editProduct(ctx.params.id,{name,imageUrl,category,description,price});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}