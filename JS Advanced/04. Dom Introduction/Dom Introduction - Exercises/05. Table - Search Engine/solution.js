function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchText = document.getElementById('searchField');
   let rows = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() { 
      for(let row of rows){
         row.classList.remove('select');
         let line = row.textContent;
         if(line.includes(searchText.value)){
            row.className = 'select';
         }
      }

   }
}