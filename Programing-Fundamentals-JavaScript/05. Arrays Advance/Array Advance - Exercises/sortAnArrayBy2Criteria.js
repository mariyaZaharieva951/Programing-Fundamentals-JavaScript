function sort (arr) {

    let result = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))

    console.log(result.join('\n'));

}

sort(['test',
    'Deny',
    'omen',
    'Default'])