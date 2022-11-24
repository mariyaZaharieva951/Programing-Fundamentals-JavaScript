function fancyBarcode (input) {

let n = input.shift();


for(let i = 0; i < n; i++) {
    let line = input[i];

    let pattern = /@[#]+(?<barcode>[A-Z][a-zA-Z0-9]{4,}[A-Z]{1})@[#]+/g

    let match = pattern.exec(line);

    if(match) {
        
        let barcode = match.groups.barcode;
        
            let charPattern = /[0-9]+/g;
            let charMatch = barcode.match(charPattern);
            if(charMatch){
            console.log(`Product group: ${charMatch.join('')}`)
            } else{console.log(`Product group: 00`)}
        } else{console.log(`Invalid barcode`)}

    }
}

fancyBarcode ((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

)