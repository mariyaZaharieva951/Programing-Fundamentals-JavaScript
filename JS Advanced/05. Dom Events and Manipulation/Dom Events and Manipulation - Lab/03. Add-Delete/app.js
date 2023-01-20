function addItem() {
    let input = document.getElementById('newItemText').value;
    let listItems = document.getElementById('items');
    let newElement = document.createElement('li');

    newElement.textContent = input;

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href = '#'
    remove.addEventListener('click', deleteItem)

    newElement.appendChild(remove)
    listItems.appendChild(newElement);

    document.getElementById('newItemText').value = '';

    function deleteItem() {
        newElement.remove()
    }

}