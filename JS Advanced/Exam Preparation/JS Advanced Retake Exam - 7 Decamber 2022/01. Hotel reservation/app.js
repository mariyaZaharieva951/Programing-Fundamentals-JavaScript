window.addEventListener('load', solve);

function solve() {
    let buttonNext = document.getElementById('next-btn');
    let infoList = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let fromDate = document.getElementById('date-in');
    let forDate = document.getElementById('date-out');
    let countGuest = document.getElementById('people-count');
    let veritification = document.getElementById('verification');


    buttonNext.addEventListener('click', next);

    function next(event) {
        event.preventDefault();

        let valueFirstName = firstName.value;
        let valueLastName = lastName.value;
        let valueFromDate = fromDate.value;
        let valueForDate = forDate.value;
        let valueGuest = Number(countGuest.value);

    
        if (firstName.value === "" || lastName.value === "" || fromDate.value === "" || forDate.value === "" || countGuest.value === "" || fromDate < forDate) { 
            return}
        
        let liInfo = document.createElement('li');
        let articleInfo = document.createElement('article');
        let h3Ifo = document.createElement('h3');
        let fromDateInfo = document.createElement('p');
        let forDateInfo = document.createElement('p');
        let guestInfo = document.createElement('p');
        let buttonEdit = document.createElement('button');
        let buttonContinue = document.createElement('button');

        h3Ifo.textContent = `Name: ${valueFirstName} ${valueLastName}`;
        fromDateInfo.textContent = `From date: ${valueFromDate}`;
        forDateInfo.textContent = `To date: ${valueForDate}`;
        guestInfo.textContent = `For ${valueGuest} people`;

        liInfo.classList = 'reservation-content';

        buttonEdit.classList = 'edit-btn';
        buttonEdit.textContent = 'Edit';
        buttonContinue.classList = 'continue-btn';
        buttonContinue.textContent = 'Continue';

        articleInfo.appendChild(h3Ifo);
        articleInfo.appendChild(fromDateInfo);
        articleInfo.appendChild(forDateInfo);
        articleInfo.appendChild(guestInfo);

        liInfo.appendChild(articleInfo);
        liInfo.appendChild(buttonEdit);
        liInfo.appendChild(buttonContinue);

        infoList.appendChild(liInfo);

        firstName.value = '';
        lastName.value = '';
        fromDate.value = '';
        forDate.value = '';
        countGuest.value = '';

        buttonNext.disabled = true;

        buttonEdit.addEventListener('click', edit)
        
        function edit (event) {
            firstName.value = valueFirstName;
            lastName.value = valueLastName;
            fromDate.value = valueFromDate;
            forDate.value = valueForDate;
            countGuest.value = valueGuest;

            buttonNext.disabled = false;

            liInfo.remove();
            
        }

        buttonContinue.addEventListener('click', continueFun);
        
        function continueFun(event) {
            
            buttonEdit.textContent = 'Confirm';
            buttonEdit.className = 'confirm-btn';
            
            buttonContinue.textContent = 'Cancel';
            buttonContinue.className = 'cancel-btn';

            confirmList.appendChild(liInfo);
            
            buttonEdit.removeEventListener('click', edit)
            buttonEdit.addEventListener('click', (event) => {
                liInfo.remove();
                buttonNext.disabled = false;
                veritification.classList = 'reservation-confirmed';
                veritification.textContent = 'Confirmed.'
            })
            buttonContinue.removeEventListener('click',continueFun)
            buttonContinue.addEventListener('click', (event) => {
                liInfo.remove();
                buttonNext.disabled = false;
                veritification.classList = 'reservation-cancelled';
                veritification.textContent = 'Cancelled.'
            })
        }
    }

}