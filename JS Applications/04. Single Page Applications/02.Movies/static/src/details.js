import { showView, spinner } from './util.js'

const section = document.querySelector('#movie-example');

export function detailsPage(id) {
    showView(section);
    displayMovie(id);
}

async function displayMovie(id) {
    section.replaceChildren(spinner());

    const user = JSON.parse(localStorage.getItem('user'));

    const [movie, likes, ownLike] = await Promise.all([getMovie(id), getLikes(id), getOwnLike(id)]);

    section.replaceChildren(createMovieCard(movie, user, likes, ownLike));
}

function createMovieCard(movie, user) {
    const element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = `
    <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>${movie.description}</p>
              ${createControl(movie, user)}
            </div>
          </div>
        </div>`;

        return element;
}

function createControl(movie,user, likes, ownLike) {
    const isOwner = user && user._id === movie._ownerId;
    
    let controls = [];

    if(isOwner) { 
       controls.push(`<a class="btn btn-danger" href="#">Delete</a>`)
        controls.push(`<a class="btn btn-warning" href="#">Edit</a>`) 
    }else { 
        controls.push(`<a class="btn btn-primary" href="#">Like</a>`)
        }
        controls.push(`<span class="enrolled-span">Liked ${likes}</span>`)
    
        return controls.join(' ')
    }

async function getMovie(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await response.json();

    return movie;   
}

async function getLikes(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&`);
    const likes = await response.json();

    return likes;
}

async function getOwnLike(movieId, user) {
    if(!user) {
        return false;
    } else {
        const userId = user._id;
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22{userId}%22`);
        const like = await response.json();
    
        return like.length > 0;
    }
    
    
}