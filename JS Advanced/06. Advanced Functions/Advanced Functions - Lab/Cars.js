function cars(input) {

    let object = {};

    let result = {
        create:(name, inherits, parentName) => (object[name] = inherits ? Object.create(object[parentName]) : {}),
        set: (name, key, value) => (object[name][key] = value),
        print: (name) => {
            let printer = [];
            for (let obj in object[name]) {
                printer.push(`${obj}:${object[name][obj]}`)
            }
            console.log(printer.join(','))
        }
    }

    input.forEach((line) => {
        let [command, name, key, value] = line.split(' ');
        result[command](name, key, value);
    });


}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)