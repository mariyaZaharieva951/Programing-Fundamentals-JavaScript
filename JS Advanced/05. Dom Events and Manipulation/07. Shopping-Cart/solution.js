function solve() {
   let buttonsAdd = [...document.querySelectorAll('button.add-product')] //всички бутони адд
   let input = document.getElementsByTagName('textarea')[0]; //полето за вписване на текст
   let checkoutButton = document.querySelector('button.checkout') //бутон чек
   let buttons = [...document.getElementsByTagName('button')] //всички бутони
   let totalSum = 0;
   let listOfProducts = [];

   for(let i = 0; i < buttonsAdd.length; i++){ //минаваме по всички бутони
      buttonsAdd[i].addEventListener('click', addProduct) //добавяме слушател на всеки бутон
      
   
   function addProduct(event){
      let name = document.getElementsByClassName('product-title')[i].textContent
      if(!listOfProducts.includes(name)){ //ако продукта го няма в списъка го добавяме
         listOfProducts.push(name)
      }
      let price = (Number(document.getElementsByClassName('product-line-price')[i].textContent)).toFixed(2);
      totalSum += Number(price);
      let text = `Added ${name} for ${price} to the cart.\n`;
      input.value += text;
   }
   }
   checkoutButton.addEventListener('click', check)

   function check(event){
      let list = listOfProducts.join(', ')
      let listText = `You bought ${list} for ${totalSum.toFixed(2)}.`
      input.value += listText
      disable()
   }
   
   function disable(){ //деактивиране на всички бутони
      buttons.forEach(button => button.disabled = true);
   }
      
   input.value = '';
   
}