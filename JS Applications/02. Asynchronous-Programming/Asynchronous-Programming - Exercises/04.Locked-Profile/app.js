function lockedProfile() {

    let divUser = document.querySelector('.user1Username');
    divUser.id = 'user1HiddenFields';

    let main = document.getElementById('main');

    let usernameInput = document.querySelector('input[name=user1Username]');
    let emailInput = document.querySelector('input[name=user1Email]');
    let ageInput = document.querySelector('input[name=user1Age]');

    //divUsers.style.display = 'none'

    //button.addEventListener('click', show);

    // function show(event) {
    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //console.log(Object.keys(data))
            for (let line in data) {
                //console.log(data[line])
                //main.innerHTML = '';
                let person = data[line];
                let age = person.age;
                let email = person.email;
                let username = person.username;

                usernameInput.value = username;
                emailInput.value = email;
                ageInput.value = age;

                let divProfile = document.createElement('div');
                let img = document.createElement('img');
                let label1 = document.createElement('label');
                let inputLock = document.createElement('input');
                let label2 = document.createElement('label');
                let inputUnlock = document.createElement('input');
                let hr1 = document.createElement('hr');
                let labelUser = document.createElement('label');
                let inputUsername = document.createElement('input');
                let divUsername = document.createElement('div');
                let hr2 = document.createElement('hr');
                let labelEmail = document.createElement('label');
                let inputEmail = document.createElement('input');
                let labelAge = document.createElement('label');
                let inputAge = document.createElement('input');
                let buttonShow = document.createElement('button');

                divProfile.classList = 'profile';
                img.src = "./iconProfile2.png";
                img.classList = 'userIcon';
                label1.textContent = 'Lock';
                inputLock.type = 'radio';
                inputLock.name = 'user1Locked';
                inputLock.value = 'lock';
                inputLock.checked = true;
                label2.textContent = 'Unlock';
                inputUnlock.type = 'radio';
                inputUnlock.name = 'user1Locked';
                inputUnlock.value = 'lock';
                inputUnlock.checked = false;
                labelUser.textContent = 'Username';
                inputUsername.type = 'text';
                inputUsername.name = 'user1Username';
                inputUsername.value = username;
                inputUsername.disabled = true;
                inputUsername.readOnly = true;
                //divUsername.classList = 'user1Username';
                divUsername.id = 'user1HiddenFields'
                labelEmail.textContent = 'Email';
                inputEmail.type = 'email';
                inputEmail.name = 'user1Email';
                inputEmail.value = email;
                inputEmail.disabled = true;
                inputEmail.readOnly = true;
                labelAge.textContent = 'Age';
                inputAge.type = 'text';
                inputAge.name = 'user1Age';
                inputAge.value = age;
                inputAge.disabled = true;
                inputAge.readOnly = true;
                buttonShow.textContent = 'Show more'

                divUsername.appendChild(hr2);
                divUsername.appendChild(labelEmail);
                divUsername.appendChild(inputEmail);
                divUsername.appendChild(labelAge);
                divUsername.appendChild(inputAge);

                divProfile.appendChild(img);
                divProfile.appendChild(label1);
                divProfile.appendChild(inputLock);
                divProfile.appendChild(label2);
                divProfile.appendChild(inputUnlock);
                divProfile.appendChild(hr1);
                divProfile.appendChild(labelUser);
                divProfile.appendChild(inputUsername);
                divProfile.appendChild(divUsername);
                divProfile.appendChild(buttonShow);

                main.appendChild(divProfile);
                let divUsers = [...document.querySelectorAll('#user1HiddenFields')];
                divUsers.forEach((div) => div.style.display = 'none')

            }

            let buttons = [...document.querySelectorAll('button')]
            buttons.forEach((button) => button.addEventListener('click', show));


            function show(event) {
                let check = document.querySelector("input[value=lock]");
                let uncheck = document.querySelector("input[value=unlock]");
                let divHidden = document.getElementById('user1HiddenFields')
                if (check.checked !== true && uncheck.checked === true) {
                    if (event.target.textContent === 'Show more') {
                        divHidden.style.display = 'inline';
                        event.target.textContent = 'Hide it';
                    } else if (event.target.textContent === 'Hide it') {
                        divHidden.style.display = 'none';
                        event.target.textContent = 'Show more'
                    }
                }
            }



        })

        .catch((error) => console.log(error))
}