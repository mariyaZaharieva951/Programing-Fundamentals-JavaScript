function gramophone (band, album, song) {

let durationSong = (album.length * band.length) * song.length / 2;
let rotations = Math.ceil(durationSong / 2.5);

console.log(`The plate was rotated ${rotations} times.`);


   // (albumName.length * bandName.length) * song-name.length / 2
}

gramophone ('Rammstein', 'Sehnsucht', 'Engel')