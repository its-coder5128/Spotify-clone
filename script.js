console.log("hello")


let songIndex=0;
var duration = 150;
let MasterNext=document.getElementById('MasterNext');
let MasterPlay=document.getElementById('MasterPlay');
let MasterPrev=document.getElementById('MasterPrev');
let MasterSongName=document.getElementById('Master-song');
let currentSong=document.getElementById('current-song');
let currentSongCover=document.getElementById('current-song-cover');
let progressBarGrid=document.getElementById('progressBarGrid');
let gif=document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('right-bar-bottom-songs'));
let libsongItems = Array.from(document.getElementsByClassName('lib-songs-list'));

let songs = [
    {songName: "Lonely Hour", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Over The Sun", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Fly", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Sinister", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Like That", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "The Time", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "TumDaDaDum", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "I Don't Wanna Know", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dreamer", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Your Love", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]


songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});
libsongItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[9-i].coverPath; 
    element.getElementsByClassName("NameofSong")[0].innerText = songs[9-i].songName; 
});

let audioElement = new Audio(songs[songIndex].filePath);


MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused)
    {
        audioElement.play();
        MasterPlay.src="./asset/pause-50.png";
        currentSongCover.src=songs[songIndex].coverPath;
        MasterSongName.innerText = songs[songIndex].songName;
        currentSong.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        MasterPlay.src="./asset/play-64.png";
        gif.style.opacity = 0;     
    }
})
MasterNext.addEventListener('click',()=>{
    audioElement.pause();
    songIndex=(songIndex+1)%10;
    audioElement = new Audio(songs[songIndex].filePath);
    MasterPlay.src="./asset/pause-50.png";
    audioElement.play();
    currentSongCover.src=songs[songIndex].coverPath;
    MasterSongName.innerText = songs[songIndex].songName;
    currentSong.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
})
MasterPrev.addEventListener('click',()=>{
    audioElement.pause();
    if(songIndex == 0)
    {
        songIndex=9;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement = new Audio(songs[songIndex].filePath);
    MasterPlay.src="./asset/pause-50.png";
    audioElement.play();
    currentSongCover.src=songs[songIndex].coverPath;
    MasterSongName.innerText = songs[songIndex].songName;
    currentSong.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
})

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/duration)* 100); 
    if(progress >= 100 )
    {
        audioElement.pause();
        songIndex=(songIndex+1)%10;
        audioElement = new Audio(songs[songIndex].filePath);
        MasterPlay.src="./asset/pause-50.png";
        audioElement.play();
        currentSongCover.src=songs[songIndex].coverPath;
        MasterSongName.innerText = songs[songIndex].songName;
        currentSong.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
    }

    
    progressBarGrid.value = progress;
})

progressBarGrid.addEventListener('change', ()=>{
    console.log(progressBarGrid.value);
    audioElement.currentTime = (progressBarGrid.value *duration)/100;
    
})

Array.from(document.getElementsByClassName('right-bar-bottom-songs')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        audioElement.pause();
        songIndex = parseInt(e.target.id) - 1;
        console.log(parseInt(e.target.id));
        audioElement = new Audio(songs[songIndex].filePath);
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.src="./asset/pause-50.png";
        currentSongCover.src=songs[songIndex].coverPath;
        MasterSongName.innerText = songs[songIndex].songName;
        currentSong.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;

    })
})
Array.from(document.getElementsByClassName('lib-songs-list')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        audioElement.pause();
        songIndex = parseInt(e.target.id) - 1;
        console.log(parseInt(e.target.id));
        audioElement = new Audio(songs[songIndex].filePath);
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.src="./asset/pause-50.png";
        currentSongCover.src=songs[songIndex].coverPath;
        MasterSongName.innerText = songs[songIndex].songName;
        currentSong.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;

    })
})


