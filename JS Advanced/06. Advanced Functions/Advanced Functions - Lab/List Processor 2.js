function listProcessor(input) {

    let result = [];

    let object = {
        add: (str) => result.push(str),
        remove: (str) => (result = result.filter((el) => el !== str)),
        print: () => console.log(result.join(','))
    }

    input.forEach(line => {
        let[command, word] = line.split(' ');
        object[command](word)
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])