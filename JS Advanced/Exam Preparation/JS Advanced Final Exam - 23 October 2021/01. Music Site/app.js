window.addEventListener('load', solve);

function solve() {
    let genreId = document.getElementById('genre');
    let songId = document.getElementById('name');
    let authorId = document.getElementById('author');
    let dateId = document.getElementById('date');
    let addButton = document.getElementById('add-btn');

    let collectionOfSongs = document.querySelector('.all-hits-container');
    let savedSongs = document.querySelector('.saved-container');
    let likes = document.querySelector('.likes');

    addButton.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        let genre = genreId.value;
        let song = songId.value;
        let author = authorId.value;
        let date = dateId.value;

        if(genre === "" ||  song === "" || author === "" || date === "") {
            return
        }

        let divHitsInfo = document.createElement('div');
        let img = document.createElement('img');
        let h2Genre = document.createElement('h2');
        let h2Name = document.createElement('h2');
        let h2Author = document.createElement('h2');
        let h3Date = document.createElement('h3');
        let saveButton = document.createElement('button');
        let likeButton = document.createElement('button');
        let deleteButton = document.createElement('button')
    
        h2Genre.textContent = `Genre: ${genre}`;
        h2Name.textContent = `Name: ${song}`;
        h2Author.textContent = `Author: ${author}`;
        h3Date.textContent = `Date: ${date}`;
        saveButton.textContent = 'Save song';
        likeButton.textContent = 'Like song';
        deleteButton.textContent = 'Delete';

        divHitsInfo.classList = 'hits-info'
        saveButton.classList = 'save-btn';
        likeButton.classList = 'like-btn';
        deleteButton.classList = 'delete-btn';

        img.src = "./static/img/img.png";

        divHitsInfo.appendChild(img);
        divHitsInfo.appendChild(h2Genre);
        divHitsInfo.appendChild(h2Name);
        divHitsInfo.appendChild(h2Author);
        divHitsInfo.appendChild(h3Date);
        divHitsInfo.appendChild(saveButton);
        divHitsInfo.appendChild(likeButton);
        divHitsInfo.appendChild(deleteButton);

        collectionOfSongs.appendChild(divHitsInfo);

        genreId.value = "";
        songId.value = "";
        authorId.value = "";
        dateId.value = "";

        likeButton.addEventListener('click', like);

        function like(event) {
            
            let p = likes.childNodes[1];
            let counterLikes = p.textContent.slice(-1);
            counterLikes = Number(counterLikes);
            counterLikes++;
            p.textContent = `Total Likes: ${counterLikes}`;  
            
            event.target.disabled = true;
        }

        saveButton.addEventListener('click', add);

        function add(event) {
            savedSongs.appendChild(divHitsInfo);
            saveButton.remove();
            likeButton.remove();

            deleteButton.addEventListener('click', deleted);
            function deleted(event) {
                divHitsInfo.remove();
            }
        }
        deleteButton.addEventListener('click', deleted);
            function deleted(event) {
                divHitsInfo.remove();
            }


    
    }
}

