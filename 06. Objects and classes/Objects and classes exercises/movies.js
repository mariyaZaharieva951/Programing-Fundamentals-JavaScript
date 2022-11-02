function movies(array) {

    let movies = [];
    let myObject = {};


    for(let arr of array) {
        let currentArray = arr;
        if(currentArray.includes('addMovie ')){
        let movieName = currentArray.split('addMovie ')[1];
        movies.push({name:movieName});
        
        } else if(currentArray.includes(' directedBy ')) {
            let movieName = currentArray.split(' directedBy ')[0];
            let director = currentArray.split(' directedBy ')[1];
            let movie = movies.find((element) => element.name === movieName) //търсим филм из масива. който да има стойност равна на името на филма
            if(movie){
                movie.director = director;
            }
        } else if(currentArray.includes(' onDate ')){
            let movieName = currentArray.split(' onDate ')[0];
            let date = currentArray.split(' onDate ')[1];
            let movie = movies.find((element) => element.name === movieName) //търсим филм из масива. който да има стойност равна на името на филма
            if(movie){
                movie.date = date;
            }

        }
    }
    for(let line of movies) {
        let result = JSON.stringify(line);
        if(line.name && line.date && line.director){
        console.log(result);}
    }


}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )