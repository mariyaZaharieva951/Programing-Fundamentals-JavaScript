function solve() {
  let text = document.getElementById('text').value;
  let typeOfCase = document.getElementById('naming-convention').value;
  let res = document.getElementById('result');
  let result = [];
  let textArray = text.split(' ');

  switch(typeOfCase){
    case 'Camel Case':
      for(let word of textArray){
        if(word === textArray[0]){
          word = word.toLowerCase();
        }else{word = word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase()}
        result.push(word)
      }
      res.textContent = result.join('');
    break;
    case 'Pascal Case':
      for(let line of textArray){
        line = line.substring(0,1).toUpperCase() + line.substring(1).toLowerCase();
        result.push(line)
      }
      res.textContent = result.join('');
    break;
    default: res.textContent = 'Error!';
  }
}