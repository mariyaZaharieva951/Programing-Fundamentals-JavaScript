function distinctArray (arr) {

    for(let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let indexCurrentEl = arr.indexOf(currentEl);
        let element = arr.splice(indexCurrentEl,1);
    
    
        for(let j = 0; j < arr.length; j++) {
            let elements = arr[j];
    
            if(currentEl === elements) {
                let index = arr.indexOf(elements);
                arr.splice(index,1);
            }
            
        }
        arr.splice(indexCurrentEl,0,currentEl);
    }
    console.log(arr.join(' '))
    }

distinctArray ([20, 20, 20, 13, 4, 4, 8])