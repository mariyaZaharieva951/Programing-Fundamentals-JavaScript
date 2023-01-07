function extractText() {
    let arr = document.getElementsByTagName('li');
    let array = Array.from(arr)
    let result = array.map(x => x.textContent).join('\n')
  
    document.getElementById('result').value = result

}