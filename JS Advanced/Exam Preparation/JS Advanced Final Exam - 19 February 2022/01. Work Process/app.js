function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let addWorkerButton = document.getElementById('add-worker');
    let divTable = document.querySelector('.tbl-header');
    let divContent = document.querySelector('.tbl-content');
    let tBody = document.getElementById('tbody');
    let pMessage = document.getElementById('message');
    let spanSum = document.getElementById('sum');

    addWorkerButton.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let positionValue = position.value;
        let salaryValue = Number(salary.value);

        if (firstNameValue === "" || lastNameValue === "" || emailValue === "" || birthValue === "" || positionValue === "" || salaryValue === "");

        let tr = document.createElement('tr');
        let tdFName = document.createElement('td');
        let tdLName = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdBirth = document.createElement('td');
        let tdPosition = document.createElement('td');
        let tdSalary = document.createElement('td');
        let firedButton = document.createElement('button');
        let editButton = document.createElement('button');

        tdFName.textContent = firstNameValue;
        tdLName.textContent = lastNameValue;
        tdEmail.textContent = emailValue;
        tdBirth.textContent = birthValue;
        tdPosition.textContent = positionValue;
        tdSalary.textContent = salaryValue;
        tdSalary.id = 'salaryNum'

        firedButton.textContent = 'Fired';
        firedButton.classList = 'fired';

        editButton.textContent = 'Edit';
        editButton.classList = 'edit'

        tr.appendChild(tdFName);
        tr.appendChild(tdLName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirth);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(firedButton);
        tr.appendChild(editButton);

        tBody.appendChild(tr);

        let allSalary = [...document.querySelectorAll('#salaryNum')];
        let budget = 0;
        allSalary.forEach((salary) => { return budget += Number(salary.textContent) });

        spanSum.textContent = budget.toFixed(2);

        firstName.value = "";
        lastName.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";

        editButton.addEventListener('click', edit);

        function edit(event) {
            firstName.value = firstNameValue;
            lastName.value = lastNameValue;
            email.value = emailValue;
            birth.value = birthValue;
            position.value = positionValue;
            salary.value = salaryValue;

            tr.remove();

            let allSalary = [...document.querySelectorAll('#salaryNum')];
            let budget = 0;
            allSalary.forEach((salary) => { return budget += Number(salary.textContent) });
            spanSum.textContent = budget.toFixed(2);
        }

        firedButton.addEventListener('click', fired);

        function fired(event) {
            tr.remove();
            let allSalary = [...document.querySelectorAll('#salaryNum')];
            let budget = 0;
            allSalary.forEach((salary) => { return budget += Number(salary.textContent) });
            spanSum.textContent = budget.toFixed(2);

        }

    }

}
