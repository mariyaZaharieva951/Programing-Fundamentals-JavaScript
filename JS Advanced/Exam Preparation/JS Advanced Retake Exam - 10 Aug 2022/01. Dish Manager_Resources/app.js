window.addEventListener("load", solve);

function solve() {

  let inProgres = document.getElementById('in-progress');
  let progresCount = document.getElementById('progress-count');
  let finished = document.getElementById('finished')
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let gender = document.getElementById('genderSelect');
  let dishInfo = document.getElementById('task');
  let buttonSubmit = document.getElementById('form-btn');
  let buttonClear = document.getElementById('clear-btn');

  if(firstName === '' || lastName === '' || age === '' || dishInfo === '') {
    return
  }

  buttonSubmit.addEventListener('click', add);

  function add(event) {

    let liInProgres = document.createElement('li');
    liInProgres.classList = 'each-line';

    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let article = document.createElement('article');
    let buttonEdit = document.createElement('button');
    let buttonComplete = document.createElement('button');

    buttonEdit.classList = 'edit-btn';
    buttonEdit.textContent = 'Edit';
    buttonComplete.classList = 'complete-btn';
    buttonComplete.textContent = 'Mark as complete';

    h4.textContent = `${firstName.value} ${lastName.value}`;
    p1.textContent = `${gender.value}, ${age.value}`;
    p2.textContent = `Dish description: ${dishInfo.value}`;

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    liInProgres.appendChild(article);
    liInProgres.appendChild(buttonEdit);
    liInProgres.appendChild(buttonComplete);

    inProgres.appendChild(liInProgres);

    progresCount.textContent++;

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    dishInfo.value = '';

    buttonEdit.addEventListener('click', edit);

    function edit(event) {
      [firstName.value, lastName.value] = h4.textContent.split(' ');
      age.value = p1.textContent.split(', ')[1];
      dishInfo.value = p2.textContent.split(': ')[1];
      progresCount.textContent--;

      liInProgres.remove();
    }

    buttonComplete.addEventListener('click', complete);

    function complete(event) {
      buttonEdit.remove();
      buttonComplete.remove();
      finished.appendChild(liInProgres);
      progresCount.textContent--;
    }

    buttonClear.addEventListener('click', (event) => {
      liInProgres.remove();
    })
  }
}
