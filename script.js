// console.log("hii");
let songIndex = 0;
letaudioElement = new Audio('perfect.mp3');
let masterPlay = documents.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "perfect", filePath: "song/perfect.mp3", coverPath: "covers/perfect.jpg"},
    {songName: "perfect", filePath: "song/perfect.mp3", coverPath: "covers/perfect.jpg"},
    {songName: "perfect", filePath: "song/perfect.mp3", coverPath: "covers/perfect.jpg"},
]

let audioElement = new Audio('perfect.mp3');
// audioElement.play();

// handle play/pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

// listen to Event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar

})
