function requestValidator(object) {

let methods = ['GET','POST','DELETE','CONNECT'];
let versions = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
let uriPattern = /^[\w.]+$/g;
let messagePettern = /^[^<>\\&\'\"]+$/g;

if(!(object.hasOwnProperty("method") && methods.includes(object.method))){
    throw new Error("Invalid request header: Invalid Method")
}
if(!(object.hasOwnProperty("uri") && (object.uri === '*' || uriPattern.test(object.uri)))){
    throw new Error("Invalid request header: Invalid URI")
}
if(!(object.hasOwnProperty("version") && versions.includes(object.version))){
    throw new Error("Invalid request header: Invalid Version")
}
if(!(object.hasOwnProperty("message") && (object.message == "" || messagePettern.test(object.message)))){
    throw new Error("Invalid request header: Invalid Message")
}
return object;

}
console.log(requestValidator({
  method: 'POST',
  uri: 'svn.public.catalog',
  //version: 'HTTP/1.1',
  message: 'rm -rf /*'
}))

