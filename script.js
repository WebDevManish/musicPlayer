var song_arr = [
  {
    song_name: "Yeh Raaten Yeh Mausam",
    url: "https://dl.sndup.net/dr9b/Yeh%20Raaten%20Yeh%20Mausam.mp3",
    song_img:
      "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/srch_saregama_INH101402125.jpg",
    duration: "3:39",
  },
  {
    song_name: "Jab Koi Baat Bigad Jaaye",
    url: "https://dl.sndup.net/vk5f/Jab%20Koi%20Baat%20Bigad%20Jaaye.mp3",
    song_img:
      "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1525348377/srch_venus_IN-V11-18-00710.jpg",
    duration: "2:52",
  },
  {
    song_name: "Jaane Woh Kaise",
    url: "https://dl.sndup.net/j4pg/Jaane%20Woh%20Kaise.mp3",
    song_img:
      "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1512044229/srch_saregama_INH101708600.jpg",
    duration: "4:38",
  },
  {
    song_name: "Mera Dil Bhi Kitna Pagal Hai",
    url: "https://dl.sndup.net/by8c/Mera%20Dil%20Bhi%20Kitna%20Pagal%20Hai.mp3",
    song_img:
      "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_venus/music/1672659748016/Mera_Dil_Bhi_Kitna_Pagal_Hai_Recreated.jpg",
    duration: "3:04",
  },
  {
    song_name: "Mere Samne Wali Khidki Me",
    url: "https://dl.sndup.net/dxzw/Mere%20Samne%20Wali%20Khidki%20Me.mp3",
    song_img:
      "https://dwn.pagolworld.in/siteuploads/thumb/c/3236_5.jpg",
    duration: "2:20",
  },
  {
    song_name: "Main Koi Aisa Geet Gaoon",
    url: "https://dl.sndup.net/bfrn/Main%20Koi%20Aisa%20Geet%20Gaaon.mp3",
    song_img:
      "https://pagalnew.com/coverimages/main-koi-aisa-geet-gaoon-yes-boss-500-500.jpg",
    duration: "5:11",
  },
];
var songs = document.querySelector("main");
var left_side = document.querySelector("#left");
var img;
var audio = new Audio();
var songUrl;
var state = true;
var iodex;
var player = document.querySelector("#player");
var songPlay = document.querySelector("#play");
var prevSong = document.querySelector("#previous_song");
var nextSong = document.querySelector("#next_song");

function addSongs() {
  var clutter = "";

  song_arr.forEach((elem, idx) => {
    clutter += `<div id="${idx}" class="song">
  <div class="song-img">
      <img src="${elem.song_img}" alt="">
  </div>
  <div class="song-name">
      <h3>${elem.song_name}</h3>
  </div>
  <div class="song-duration">
      <span>${elem.duration}</span>
  </div>
</div>`;
  });

  songs.innerHTML = clutter;
}
function displayThumbnail() {
  songs.addEventListener("click", function (dets) {
    img = song_arr[dets.target.id].song_img;
    left_side.style.backgroundImage = `url("${img}")`;
  });
}
function selectSong() {
  songs.addEventListener("click", function (dets) {
    iodex = Number(dets.target.id);
    songUrl = song_arr[dets.target.id].url;
    playSong();
  });
}
function playSong() {
  audio.src = songUrl;
  audio.play();
}
function controls() {
  songPlay.addEventListener("click", function () {
    if (state == true) {
      songPlay.innerHTML = `<i class="fa-solid fa-play"></i>`;
      audio.pause();
      state = false;
    } else {
      songPlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      audio.play();
      state = true;
    }
  });
  prevSong.addEventListener("click", function () {
    if (iodex <= 0) {
      iodex = 0;
      songUrl = song_arr[iodex].url;
    } else if (iodex > 0) {
      iodex -= 1;
      songUrl = song_arr[iodex].url;
    }
    playSong();
    left_side.style.backgroundImage = `url("${song_arr[iodex].song_img}")`;
  });
  nextSong.addEventListener("click", function () {
    iodex += 1;
    if (iodex <= song_arr.length - 1) {
      songUrl = song_arr[iodex].url;
      playSong();
    } else {
      iodex = song_arr.length - 1;
      songUrl = song_arr[iodex].url;
      playSong();
    }
    left_side.style.backgroundImage = `url("${song_arr[iodex].song_img}")`;
  });
}

addSongs();
displayThumbnail();
selectSong();
controls();