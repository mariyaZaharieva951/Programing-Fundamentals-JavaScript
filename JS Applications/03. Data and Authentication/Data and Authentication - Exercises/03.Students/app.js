
    let table = document.getElementById('results');
    let firstName = document.querySelector('input[name="firstName"]');
    let lastName = document.querySelector('input[name="lastName"]');
    let facultyNumber = document.querySelector('input[name="facultyNumber"]');
    let grade = document.querySelector('input[name="grade"]');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let submitBtn = document.getElementById('submit');

    let url = `http://localhost:3030/jsonstore/collections/students`
    window.addEventListener('load', load);

    async function load(event) {
        fetch(url, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(students => {
            Object.values(students).forEach((student) => {
                let tr = document.createElement('tr');
                let tdFirstName = document.createElement('td');
                let tdLastName = document.createElement('td');
                let tdFacultyNum = document.createElement('td');
                let tdGrade = document.createElement('td');

                tdFirstName.innerText = student.firstName;
                tdLastName.innerText = student.lastName;
                tdFacultyNum.innerText = student.facultyNumber;
                tdGrade.innerText = Number(student.grade);

                tr.id = student.id;

                tr.appendChild(tdFirstName);
                tr.appendChild(tdLastName);
                tr.appendChild(tdFacultyNum);
                tr.appendChild(tdGrade);

                tbody.appendChild(tr); 
            })
            
        })
    }

    submitBtn.addEventListener('click', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();
        await fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({'firstName': firstName.value, 'lastName': lastName.value, 'facultyNumber': facultyNumber.value, 'grade': Number(grade.value)})
        }) 
        .then(response => response.json())
        .then(data => {
            console.log(data)
                let tr = document.createElement('tr');
                let tdFirstName = document.createElement('td');
                let tdLastName = document.createElement('td');
                let tdFacultyNum = document.createElement('td');
                let tdGrade = document.createElement('td');

                tdFirstName.innerText = data.firstName;
                tdLastName.innerText = data.lastName;
                tdFacultyNum.innerText = data.facultyNumber;
                tdGrade.innerText = data.grade;

                tr.id = data.id;

                tr.appendChild(tdFirstName);
                tr.appendChild(tdLastName);
                tr.appendChild(tdFacultyNum);
                tr.appendChild(tdGrade);

                tbody.appendChild(tr); 
        
        })
        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';
    }


    




