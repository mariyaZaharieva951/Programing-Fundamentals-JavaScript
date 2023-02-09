function solution() {
    let input = document.getElementsByTagName('input')[0];
    let buttonAdd = document.getElementsByTagName('button')[0];
    let cards = [...document.querySelectorAll('.card')];

    let sectionListOfGifts = cards[1];
    let sectionSentGifts = cards[2];
    let sectionDiscardedGifts = cards[3];
    let arrayOfLi = [];

    buttonAdd.addEventListener('click', add);

    function add(event) {
        let ul = sectionListOfGifts.children[1];
    
        let li = document.createElement('li');
        li.textContent = input.value;
        li.classList = 'gift';
        let buttonSend = document.createElement('button');
        let buttonDiscard = document.createElement('button');
        buttonSend.id = 'sendButton';
        buttonDiscard.id = 'discardButton';
        buttonSend.textContent = 'Send';
        buttonDiscard.textContent = 'Discard';

        li.appendChild(buttonSend);
        li.appendChild(buttonDiscard);

        arrayOfLi.push(li)
        let sorted = arrayOfLi.sort((a,b) => a.textContent.localeCompare(b.textContent)); //първо сортираме на li-те

        for(let arrLi of sorted) {  //след това ги закрепяме към ul
            ul.appendChild(arrLi);
        }
        input.value = "";
    
        buttonSend.addEventListener('click', sent);

        function sent(event) {
            let ulSent = sectionSentGifts.children[1];

            let liSent = document.createElement('li');
            liSent.classList = 'gift'
            liSent.appendChild(event.target.parentElement.childNodes[0]);
            ulSent.appendChild(liSent);

            event.target.parentElement.remove();
        }

        buttonDiscard.addEventListener('click', discard);

        function discard(event) {
            let ulDiscard = sectionDiscardedGifts.children[1];

            let liDiscard = document.createElement('li');
            liDiscard.classList = 'gift';
            liDiscard.appendChild(event.target.parentElement.childNodes[0]);
            ulDiscard.appendChild(liDiscard);

            event.target.parentElement.remove();

        }
    }
}