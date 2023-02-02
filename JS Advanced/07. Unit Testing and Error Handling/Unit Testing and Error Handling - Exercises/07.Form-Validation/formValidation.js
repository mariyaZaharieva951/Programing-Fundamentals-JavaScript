function validate() {
    let inputUser = document.getElementById('username');
    let inputEmail = document.getElementById('email');
    let inputPass = document.getElementById('password');
    let inputConfirmPass = document.getElementById('confirm-password');

    let checkBox = document.getElementById('company');
    checkBox.addEventListener('change', check);

    function check(event) {
        if (checkBox.checked) {
            let companyInfo = document.getElementById('companyInfo');
            companyInfo.style.display = 'block';
        } else { companyInfo.style.display = 'none'; }
    }

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validator);

    let patternUser = /^[A-Za-z0-9]{3,20}$/g;
    let patternPass = /^[\w]{5,15}$/g;
    let patternEmail = /^.*@.*\..*$/g;

    let redInput = []; // създаваме масив, в който щв пазим полетата, които са с невалидни данни

    function validator(event) {
        event.preventDefault(); //submit бутона е във форм поле и за да избегнем рефреш на стойността дабавяме preventDefault
        if (!patternUser.test(inputUser.value)) {
            inputUser.style.borderColor = 'red';
            redInput.push(inputUser);
        }
        if (!patternEmail.test(inputEmail.value)) {
            inputEmail.style.borderColor = 'red';
            redInput.push(inputEmail);
        }
        if (!patternPass.test(inputPass.value) || inputConfirmPass.value !== inputPass.value) {
            inputPass.style.borderColor = 'red';
            inputConfirmPass.style.borderColor = 'red';
            redInput.push(inputConfirmPass)
            redInput.push(inputPass)
        }
        
    
    if (checkBox.checked) {
        let companyNumber = document.getElementById('companyNumber');
        let patternCompanyNumber = /^[0-9]{4}$/g;
        if (!patternCompanyNumber.test(companyNumber.value) || companyNumber.value < 1000) {
            companyNumber.style.borderColor = 'red';
            redInput.push(companyNumber)
        } 
    }

    let valid = document.getElementById('valid');
    if(redInput.length === 0){
        valid.style.display = 'block';
    } else(valid.style.display = 'none')
    }

}


