import {html} from '../../node_modules/lit-html/lit-html.js'
import { editOffer, getOfferById } from '../api/data.js';


let editTemplate = (onSubmit,offer) => html `
<section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
          value=${offer.title}
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
          value=${offer.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
          value=${offer.category}
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        >${offer.description}</textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        >${offer.requirements}</textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
          value=${offer.salary}
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`

export async function editPage(ctx) {
    let offer = await getOfferById(ctx.params.id);
    ctx.render(editTemplate(onSubmit,offer));

    async function onSubmit(ev) {
        ev.preventDefault();

        let form = ev.currentTarget;
        let formData = new FormData(form);
        
        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        let requirements = formData.get('requirements');
        let salary = formData.get('salary');

        if(title == '' || imageUrl == '' || description == '' || requirements == '' || salary == '') {
            alert('Please, fill all fields!')
            return
        }

        await editOffer(ctx.params.id,{title,imageUrl,description,requirements,salary});
        
        ctx.page.redirect(`/details/${ctx.params.id}`)
    } 
}