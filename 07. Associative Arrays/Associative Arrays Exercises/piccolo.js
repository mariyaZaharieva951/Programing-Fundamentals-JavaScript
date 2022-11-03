function piccolo(array) {

    let map = new Map;

    for (let line of array) {
        let [direction, carNumber] = line.split(', ');

        if (direction === 'IN') {
            if (map.has(carNumber)) {
                map.delete(carNumber);
                map.set(carNumber);
            } else { map.set(carNumber); }
        } else if (direction === 'OUT') {
            if (map.has(carNumber)) {
                map.delete(carNumber);
            }
        }
    }
    if (map.size === 0) {
        console.log(`Parking Lot is Empty`);
        return
    }
    let keys = Array.from(map.keys());

    let sorted = keys.sort((a,b) => a.localeCompare(b));
 
   for (let line of sorted) {
       console.log(`${line}`)
  }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, AA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)