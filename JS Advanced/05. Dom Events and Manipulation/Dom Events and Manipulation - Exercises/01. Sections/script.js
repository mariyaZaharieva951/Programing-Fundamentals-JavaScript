function create(words) {
   let content = document.getElementById('content')
   
   for(let word of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      div.appendChild(p);
      p.textContent = word;
      p.style.display = 'none';

      let parent = p.parentElement;
      parent.addEventListener('click', onShow);
      content.appendChild(parent)

      function onShow(event){
         p.style.display = ''
         
      }
      
   }
   
}