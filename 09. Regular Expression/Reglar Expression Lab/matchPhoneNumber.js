function matchPhoneNumber (input) {

let string = input.join(' ');

let pattern = /[+]359([ |-])2\1\d{3}\1\d{4}\b/g;

let matches = string.match(pattern);

console.log(matches.join(', '))


}

matchPhoneNumber(
    ['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
    )