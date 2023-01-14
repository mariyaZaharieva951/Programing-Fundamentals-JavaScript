function addItem() {
    let text = document.getElementById('newItemText').value;
    let listItems = document.getElementById('items');
    let newElement = document.createElement('li');

    newElement.textContent = text;
    listItems.appendChild(newElement);
    document.getElementById('newItemText').value = '';
  
}