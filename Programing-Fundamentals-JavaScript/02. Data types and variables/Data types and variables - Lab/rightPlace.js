function rightPlace (str1, char, str2) {

let word = str1.replace('_', char);

if (word === str2) {
   console.log("Matched"); 
} else {console.log("Not Matched");
}

}

rightPlace ('Str_ng', 'I', 'Strong')