function hardWords(input) {

    let words = input.pop();
    let text = input[0].split(' ');
    let copyText = text.join(' ')
    let replaceText = copyText;

    text.forEach(element => {
        if (element.startsWith('_')) {
            let lastElement = element.substring(element.length - 1, element.length);
            if (lastElement.charCodeAt() !== 95) {
                element = element.substring(0, element.length - 1);
            }
            let replaceWord = words.filter(word => element.length === word.length).join(' ');
            replaceText = replaceText.replace(element, replaceWord)

        }
    });

    console.log(replaceText)
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)