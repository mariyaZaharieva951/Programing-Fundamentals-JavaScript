function reverseString (word) {

   let text = word;
   let letter = "";
 

    for(let i = text.length; i > 0; i-- ) {
         letter += text[i-1];
       
        
    }

    console.log(letter);
}

reverseString ("1234")

