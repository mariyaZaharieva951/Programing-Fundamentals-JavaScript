import { html } from '../../node_modules/lit-html/lit-html.js'
import { editBook, getBookById } from '../api/data.js';

let editTemplate = (book, onEdit) => html `
<section id="edit-page" class="edit">
    <form @submit=${onEdit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`

export async function editPage(ctx) {
    let book = await getBookById(ctx.params.id)
    ctx.render(editTemplate(book, onEdit))

    async function onEdit(ev) {
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(ev.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if(title == '' || description == '' || imageUrl == '' || type == '') {
            return alert('Please, fill all fields!');
        }

        await editBook(ctx.params.id, {title,description,imageUrl,type});

        form.reset();
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}

