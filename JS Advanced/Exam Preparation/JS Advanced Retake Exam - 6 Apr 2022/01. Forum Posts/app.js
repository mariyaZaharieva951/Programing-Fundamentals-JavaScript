window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentInput = document.getElementById('post-content');
  let buttonPublish = document.getElementById('publish-btn');

  buttonPublish.addEventListener('click', add);

  function add(event) {
    event.preventDefault();

    let title = titleInput.value;
    let category = categoryInput.value;
    let content = contentInput.value;

    if (title === "" || category === "" || content === "") {
      return
    }

    let reviewList = document.getElementById('review-list');

    let h4 = document.createElement('h4');
    let pCategoty = document.createElement('p');
    let pContent = document.createElement('p');
    let article = document.createElement('article');
    let buttonEdit = document.createElement('button');
    let buttonApprove = document.createElement('button');
    let li = document.createElement('li');

    h4.textContent = title;
    pCategoty.textContent = `Category: ${category}`;
    pContent.textContent = `Content: ${content}`;
    buttonEdit.textContent = 'Edit';
    buttonEdit.classList= 'action-btn edit';
    buttonApprove.textContent = 'Approve'
    buttonApprove.classList = 'action-btn approve';
    li.classList.add('rpost');

    article.appendChild(h4);
    article.appendChild(pCategoty);
    article.appendChild(pContent);

    li.appendChild(article);
    li.appendChild(buttonApprove);
    li.appendChild(buttonEdit);

    reviewList.appendChild(li);

    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';

    buttonEdit.addEventListener('click', edit);

    function edit(event) {
      titleInput.value = title;
      categoryInput.value = category;
      contentInput.value = content;

      li.remove();
    }

    let publishedList = document.getElementById('published-list');

    buttonApprove.addEventListener('click', approve);

    function approve(event) {
      publishedList.appendChild(li)
      
      buttonApprove.remove();
      buttonEdit.remove();
    }

    let buttonClear = document.getElementById('clear-btn');
    buttonClear.addEventListener('click', clear);

    function clear(event) {
     publishedList.innerHTML = '';
    }

  }
}
