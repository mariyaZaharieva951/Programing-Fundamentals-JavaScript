function garage(input) {

    let result = {};

    for (let line of input) {
        let [numberGarge, information] = line.split(' - ');

        information = information.split(', ');

        if (!result.hasOwnProperty(numberGarge)) {
            result[numberGarge] = [information]
        } else { result[numberGarge].push(information) }

    }
    for (let line in result) {
        console.log(`Garage № ${Number(line)}`);
        for (let arr of result[line]) {
            let output = [];
            for (let el of arr) {
                let [key, value] = el.split(': ');
                output.push(`${key} - ${value}`)
            }
            console.log(`--- ${output.join(', ')}`)
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])