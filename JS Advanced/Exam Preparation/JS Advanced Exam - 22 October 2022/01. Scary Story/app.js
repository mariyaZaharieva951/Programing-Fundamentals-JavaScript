window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let yourStory = document.getElementById('story');
  let publishButton = document.getElementById('form-btn');
  let previewList = document.getElementById('preview-list');
  let divMain = document.getElementById('main');


  publishButton.addEventListener('click', (event) => {

    if(firstName.value === '' || lastName.value === '' || storyTitle.value === '' || age.value === '' || yourStory.value === '') {
      return
    }

    let valueFirstName = firstName.value;
    let valueLastName = lastName.value;
    let valueAge = age.value;
    let valueStoryTitle = storyTitle.value;
    let valueGenre = genre.value;
    let valueYourStory = yourStory.value;

    let liStoryInfo = document.createElement('li');
    let article = document.createElement('article');
    let h4Name = document.createElement('h4');
    let pAge = document.createElement('p');
    let pTitle = document.createElement('p');
    let pGenre = document.createElement('p');
    let pStory = document.createElement('p');
    let saveButton = document.createElement('button');
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    liStoryInfo.classList = 'story-info';
    
    h4Name.textContent = `Name: ${valueFirstName} ${valueLastName}`;
    pAge.textContent = `Age: ${valueAge}`;
    pTitle.textContent = `Title: ${valueStoryTitle}`;
    pGenre.textContent = `Genre ${valueGenre}`;
    pStory.textContent = `${valueYourStory}`;
    saveButton.textContent = 'Save Story';
    editButton.textContent = 'Edit Story';
    deleteButton.textContent = 'Delete Story';
    saveButton.classList = 'save-btn';
    editButton.classList = 'edit-btn';
    deleteButton.classList = 'delete-btn';

    article.appendChild(h4Name);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    liStoryInfo.appendChild(article);
    liStoryInfo.appendChild(saveButton);
    liStoryInfo.appendChild(editButton);
    liStoryInfo.appendChild(deleteButton);

    previewList.appendChild(liStoryInfo);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    yourStory.value = '';

    publishButton.disabled = true;

    editButton.addEventListener('click', (event) => {
      firstName.value = valueFirstName;
      lastName.value = valueLastName;
      age.value = valueAge;
      storyTitle.value = valueStoryTitle;
      genre.value = valueGenre;
      yourStory.value = valueYourStory; 

      liStoryInfo.remove();
      publishButton.disabled = false;

    })

    saveButton.addEventListener('click', (event) => {
      divMain.innerHTML = '';
      let h1Message = document.createElement('h1');
      h1Message.textContent = 'Your scary story is saved!';
      divMain.appendChild(h1Message);
    })

    deleteButton.addEventListener('click', (event) => {
      liStoryInfo.remove();
      publishButton.disabled = false;
    })


  })
}
