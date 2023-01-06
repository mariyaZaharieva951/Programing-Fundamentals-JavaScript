function editElement(element,match,replacer) {
    
    let text = element.textContent;
    let pattern = new RegExp(match, 'g')
    let result = text.replace(pattern,replacer);
    element.textContent = result;
    
}