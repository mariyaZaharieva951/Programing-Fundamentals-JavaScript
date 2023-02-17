function solve() {
  
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');
    let addButton = document.getElementById('add');
    let orange = document.querySelector('.orange');
    let divOrange = orange.parentElement.parentElement.childNodes[3]; 
    let yellow = document.querySelector('.yellow');
    let divYellow = document.getElementById('in-progress'); 
    let green = document.querySelector('.green');
    let divGreen = green.parentElement.parentElement.childNodes[3]; 

    addButton.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let task = taskInput.value;
        let description = descriptionInput.value;
        let date = dateInput.value;

        if(task === "" || description === "" || date === "") {
            return
        }
        let article = document.createElement('article');
        let h3Task = document.createElement('h3');
        let pDescription = document.createElement('p');
        let pDate = document.createElement('p');
        let divFlex = document.createElement('div');
        let startButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        h3Task.textContent = task;
        pDescription.textContent = `Description: ${description}`;
        pDate.textContent = `Due Date: ${date}`;
        divFlex.classList = 'flex';
        
        startButton.textContent = 'Start';
        startButton.classList = 'green';
        deleteButton.textContent = 'Delete';
        deleteButton.classList = 'red';

        divFlex.appendChild(startButton);
        divFlex.appendChild(deleteButton);

        article.appendChild(h3Task);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(divFlex);

        divOrange.appendChild(article);

        taskInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";
        
        let finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.classList = 'orange';

        startButton.addEventListener('click',start);

        function start(event) {
            //orange.remove(article)
            divYellow.appendChild(article);
            startButton.remove();
            divFlex.appendChild(finishButton)
        }

        deleteButton.addEventListener('click', deleted);

        function deleted(event) {
            article.remove();
        }

        
        finishButton.addEventListener('click', finish);

        function finish(event) {
            divFlex.remove();
            divGreen.appendChild(article);
           
        }
    }
}