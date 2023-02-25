function loadRepos() {
  
   let button = document.querySelector('button');
   let div = document.getElementById('res');

   button.addEventListener('click', loadRepos);

   function loadRepos(event) {
      let url = `https://api.github.com/users/testnakov/repos`;
      let htppRequest = new XMLHttpRequest();
      htppRequest.addEventListener('readystatechange', function() {
         if(htppRequest.readyState === 4 && htppRequest.status === 200) {
            let data = JSON.parse(htppRequest.responseText);
            div.textContent = data.map(x => x.name)
         }
      });
      htppRequest.open('GET', url);
      htppRequest.send();
   }
}