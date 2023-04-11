import {html} from '../../node_modules/lit-html/lit-html.js'
import { createOffer } from '../api/data.js';


let createTemplate = (onSubmit) => html `
<section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form @submit=${onSubmit} class="create-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
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

        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        let requirements = formData.get('requirements');
        let salary = formData.get('salary');

        if(title == '' || imageUrl == '' || description == '' || requirements == '' || salary == '') {
            alert('Please, fill all fields!')
            return
        }

        await createOffer({title,imageUrl,description,requirements,salary});
        ctx.page.redirect('/catalog')
    } 
}