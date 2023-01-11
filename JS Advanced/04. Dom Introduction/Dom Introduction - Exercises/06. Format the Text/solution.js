function solve() {
  let text = document.getElementById('input').value;
  let array = text.split('.').filter(x => x.length !== 0);
  let output = document.getElementById('output');
  

  for(let i = 0; i < array.length; i+=3){
    let paragraf = array.slice(i,i+3);
    console.log(paragraf)
    let p = document.createElement('p');
    p.textContent = paragraf.join('. ') + '.'
    output.appendChild(p)
  }
 
}

