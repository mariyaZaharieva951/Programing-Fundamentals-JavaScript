function songs(array) {
    
class Song { 
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time
    }
}
let num = Number(array.shift());
let lastElement = array.pop();

let songs = [];

for(let i = 0; i < num; i++) {
    let currentArray = array[i];
    currentArray = currentArray.split('_');
    let typeList = currentArray[0];
    let name = currentArray[1];
    let time = currentArray[2];
    let mySong = new Song(typeList, name, time);
    if(typeList === lastElement){
    songs.push(mySong);
    //console.log(`${name}`)
} else if(lastElement === 'all') {
    songs.push(mySong);
    //console.log(`${name}`);
}
}
//let keys = Object.keys(el);
for(let el of songs) {
   console.log(el['name']);
//    console.log(keys)
//    console.log(keys[this.name]);
}
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )
    songs    ([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater'])
        songs([2,
            'like_Replay_3:15',
            'ban_Photoshop_3:48',
            'all']
            )
        