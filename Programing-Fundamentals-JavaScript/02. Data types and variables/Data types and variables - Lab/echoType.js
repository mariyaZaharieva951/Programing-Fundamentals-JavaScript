function echoType (data) {

if (typeof data == "string") {
   console.log(typeof data);
   console.log('Hello, JavaScript!')
} else if (typeof data == "number") {
    console.log(typeof data);
    console.log(data)
 } else {
    console.log(typeof data);
    console.log('Parameter is not suitable for printing')
 }




}

echoType (null)