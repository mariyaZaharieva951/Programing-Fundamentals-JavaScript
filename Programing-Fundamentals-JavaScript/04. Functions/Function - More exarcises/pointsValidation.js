function pointValidation(array) {

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    


    function distance(x1, y1, x2, y2) {

        let distance1 = Math.sqrt(((0 - x1) * (0 - x1)) + ((0 - y1) * (0 - y1)));
        if (distance1 === Math.trunc(distance1)) {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        } else {console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
        let distance2 = Math.sqrt(((0 - x2) * (0 - x2)) + ((0 - y2) * (0 - y2)));
        if (distance2 === Math.trunc(distance2)) {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else {console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
        let distance3 = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
        if (distance3 === Math.trunc(distance3)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    }

    distance(x1, y1, x2, y2)

}

pointValidation([-3, -1, -2, -4])