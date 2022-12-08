function treasureFinder(input) {

    let key = input.shift().split(' ');
    let line = input.shift();
 
    while (line !== 'find') {
      let result = [];
       let indexKey = 0;
       for (let char of line) {
          let code = char.charCodeAt();
          let currentKey = Number(key[indexKey]);
          indexKey++;
          if (indexKey > (key.length - 1)) {
             indexKey = 0;
          }
          code = code - currentKey;
          let newChar = String.fromCharCode(code);
          result.push(newChar)
       }
       result = result.join('')
       
       let indexTypeStart = result.indexOf('&');
       let indexTypeEnd = result.lastIndexOf('&');
       let type = result.substring(indexTypeStart+1,indexTypeEnd);
       let indexCordinatesStart = result.indexOf('<');
       let indexCordinatesEnd = result.lastIndexOf('>');
       let cordinates = result.substring(indexCordinatesStart+1,indexCordinatesEnd);
       console.log(`Found ${type} at ${cordinates}`)
       line = input.shift();
    }
 
 }
 
 treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]
 
 )