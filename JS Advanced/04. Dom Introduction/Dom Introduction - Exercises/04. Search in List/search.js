function search() {
   let textArray = Array.from(document.querySelectorAll('ul#towns li'));
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for(let line of textArray){
      let element = line.textContent;
      line.style.fontWeight = 'normal';
      line.style.textDecoration = '';
      
      if(element.match(searchText)){
         matches++;
         line.style.fontWeight = 'bold';
         line.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${matches} matches found`
}
