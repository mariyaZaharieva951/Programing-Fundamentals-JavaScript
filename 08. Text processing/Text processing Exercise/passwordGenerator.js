function passwordGenerator(input) {

    let word = input.pop().toUpperCase();
    let concatString = (input[0] + input[1]).toLowerCase();

    let vowel = ['a', 'i', 'e', 'o', 'u'];

    let index = 0;

    for (let element of concatString) {
        if (vowel.includes(element)) {
            concatString = concatString.replace(element, word[index++]);
            if (word[index] === undefined) {
                index = 0;
            }
        }
    }
    let password = concatString.split('').reverse().join('')
    console.log(`Your generated password is ${password}`)

}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)