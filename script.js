"use strict";

let audioTrack = document.createElement("audio");
audioTrack.preload = "metadata";
document.body.append(audioTrack);

let blurElement = document.getElementById("blurElement");

let themes = document.getElementById("themes");

let musicBox = document.getElementById("musicBox");

let trackItemsWrapper = document.getElementById("trackItemsWrapper");

let trackArtistName = document.getElementById("trackArtistName");
let trackAlbumName = document.getElementById("trackAlbumName");

let coverImage = document.getElementById("coverImage");

let playButton = document.getElementById("playButton");
let playButtonIcon = playButton.firstElementChild;
let pauseButtonIcon = playButton.lastElementChild;

let previousButton = document.getElementById("previousButton");
let nextButton = document.getElementById("nextButton");

let volumeWrapper = document.getElementById("volumeWrapper");
let volumeButton = document.getElementById("volumeButton");
let volumeNumber = document.getElementById("volumeNumber");

let wavesVolumeButton = document.getElementById("wavesVolumeButton");
let highVolumeSymbol = document.getElementById("highVolumeSymbol");
let mediumVolumeSymbol = document.getElementById("mediumVolumeSymbol");
let lowVolumeSymbol = document.getElementById("lowVolumeSymbol");
let volumeCross = document.getElementById("volumeCross");

let currentTrackTimeNumber = document.getElementById("currentTrackTimeNumber");
let currentTrackDuration = document.getElementById("currentTrackDuration");

let trackProgressBar = document.getElementById("trackProgressBar");
let trackLoading = document.getElementById("trackLoading");
let currentTrackTimeBar = document.getElementById("currentTrackTimeBar");

let musics = [
    {
        trackName: "Losing Control",
        artist: "Villain of the story",
        album: "Divided",
        coverImage: "https://i.postimg.cc/y62Drhym/image.jpg",
        audioSource: "https://cdns-preview-4.dzcdn.net/stream/c-465dbacd317d67cc6a4d1adb22355970-2.mp3"
    },
    {
        trackName: "Senden Baska",
        artist: "Serhet Durmus",
        album: "Singles",
        coverImage: "https://i.postimg.cc/cCtNnnKZ/image.jpg",
        audioSource: "https://cdns-preview-9.dzcdn.net/stream/c-94e53a428fd9dbf35c5b06d800447c2a-4.mp3"
    },
    {
        trackName: "I don't care",
        artist: "Apocalyptica",
        album: "Singles",
        coverImage: "https://i.postimg.cc/BZj8g7HZ/image.jpg",
        audioSource: "https://cdns-preview-d.dzcdn.net/stream/c-dbbdb0dd57e34c52b2379fb69bc7da4f-3.mp3"
    },
    {
        trackName: "Monster",
        artist: "Fight the Fade",
        album: "APOPHYSITIS",
        coverImage: "https://i.postimg.cc/BnS4htk5/image.jpg",
        audioSource: "https://cdns-preview-4.dzcdn.net/stream/c-46413a2a74ddd53a2f13ef2b853202f7-3.mp3"
    },
    {
        trackName: "Dance With the Devil",
        artist: "Breaking Benjamin",
        album: "Phobia",
        coverImage: "https://i.postimg.cc/15Xzmj0J/image.jpg",
        audioSource: "https://cdns-preview-b.dzcdn.net/stream/c-b2bbd0db3fb9e1314ef56dfc11c86a65-5.mp3"
    },
    {
        trackName: "The Catalyst",
        artist: "Linkin Park",
        album: "A Thousand Sun",
        coverImage: "https://i.postimg.cc/FK3jRqxM/image.jpg",
        audioSource: "https://cdns-preview-8.dzcdn.net/stream/c-8930ac6a4a087666b651b8aad5cd4a26-5.mp3"
    },
    {
        trackName: "Lali",
        artist: "Jony",
        album: "Spisok tvoikh mysley",
        coverImage: "https://i.postimg.cc/hvyGBHCW/image.jpg",
        audioSource: "https://cdns-preview-0.dzcdn.net/stream/c-095471cd71c784daa9eab6beb69c5848-3.mp3"
    }
];

musics.forEach((item, index) => {
    trackItemsWrapper.innerHTML += `<div class="track-item" data-index="${index}">${index + 1
        }. ${item.trackName}</div>`;
});

trackItemsWrapper.firstElementChild.classList.add("active");

function informationUpdate(target) {
    target = target ? target : 0;
    coverImage.src = "";
    coverImage.src = musics[target].coverImage;
    audioTrack.src = musics[target].audioSource;
    trackArtistName.textContent = musics[target].artist;
    trackAlbumName.textContent = musics[target].album;
}

informationUpdate();

themes.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;
    let targetTheme = e.target.dataset.theme;

    let activeTheme = document.querySelector(".active-theme");
    activeTheme.classList.remove("active-theme");

    e.target.classList.add("active-theme");

    switch (targetTheme) {
        case "theme1":
            blurElement.style.visibility = "hidden";
            musicBox.style.border = "";
            musicBox.style.boxShadow = "";
            coverImage.style.background = "";
            trackProgressBar.style.background = "";
            currentTrackTimeBar.style.background = "";
            trackLoading.style.background = "";
            break;

        case "theme2":
            blurElement.style.visibility = "visible";
            musicBox.style.border = "1px solid #ffffff12";
            musicBox.style.boxShadow =
                "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
            blurElement.style.background =
                "linear-gradient(135deg, #dc143c, #009688)";
            coverImage.style.background = "#00968875";
            trackProgressBar.style.background = "#0fd5ca73";
            currentTrackTimeBar.style.background = "#0fd5ca";
            trackLoading.style.background = "#0fd5ca";
            break;

        case "theme3":
            blurElement.style.visibility = "visible";
            musicBox.style.border = "1px solid #ffffff12";
            musicBox.style.boxShadow =
                "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
            blurElement.style.background =
                "linear-gradient(135deg, #7f0096, #14abdc)";
            coverImage.style.background = "#288bcf75";
            trackProgressBar.style.background = "#0fd5ca73";
            currentTrackTimeBar.style.background = "#0fd5ca";
            trackLoading.style.background = "#0fd5ca";
            break;
    }
});

trackItemsWrapper.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;
    let activeAudio = document.querySelector(".active");
    activeAudio.classList.remove("active");
    e.target.classList.add("active");

    let targetIndex = e.target.dataset.index;

    informationUpdate(targetIndex);
});

audioTrack.addEventListener("waiting", waitingEvent);

function waitingEvent() {
    trackLoading.classList.add("track-loading");
}

audioTrack.addEventListener("canplay", (e) => {
    trackLoading.classList.remove("track-loading");
    audioTrack.removeEventListener("waiting", waitingEvent);
});

let firstPlay = true;
audioTrack.addEventListener("loadstart", (e) => {
    audioTrack.addEventListener("waiting", waitingEvent);
    currentTrackTimeBar.style.width = 0;
    if (!firstPlay) {
        audioTrack.play();
    }
    firstPlay = false;
});

let requestAnimationTimeArgument = performance.now();

requestAnimationFrame(function currentTimeUpdater(
    requestAnimationTimeArgument
) {
    let currentTime = audioTrack.currentTime;

    let currentMinute = Math.trunc(currentTime / 60);
    let currentSeconds = Math.trunc(currentTime % 60);

    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    currentTrackTimeNumber.textContent = `${currentMinute}:${currentSeconds}`;

    currentTrackTimeBar.style.width =
        (currentTime / audioTrack.duration) * 100 + "%";

    requestAnimationFrame(currentTimeUpdater);
});

audioTrack.addEventListener("canplay", canPlayEvent);

audioTrack.addEventListener("durationchange", canPlayEvent);

function canPlayEvent(e) {
    let totalTime = audioTrack.duration;

    let totalMinute = Math.trunc(totalTime / 60);
    let totalSeconds = Math.trunc(totalTime % 60);

    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
    }

    currentTrackDuration.textContent = `${totalMinute}:${totalSeconds}`;
}

playButton.addEventListener("click", (e) => {
    if (audioTrack.paused) {
        audioTrack.play();
    } else {
        audioTrack.pause();
    }
});

audioTrack.addEventListener("play", (e) => {
    playButtonIcon.style.display = "none";
    pauseButtonIcon.style.display = "block";
});

audioTrack.addEventListener("pause", (e) => {
    playButtonIcon.style.display = "block";
    pauseButtonIcon.style.display = "none";
});

nextButton.addEventListener("click", (e) => {
    let activeAudio = document.querySelector(".active");

    if (activeAudio.nextElementSibling) {
        activeAudio.classList.remove("active");
        activeAudio.nextElementSibling.classList.add("active");

        informationUpdate(activeAudio.nextElementSibling.dataset.index);
    } else {
        activeAudio.classList.remove("active");
        trackItemsWrapper.firstElementChild.classList.add("active");

        informationUpdate(0);
    }
});

previousButton.addEventListener("click", (e) => {
    let activeAudio = document.querySelector(".active");

    if (activeAudio.previousElementSibling) {
        activeAudio.classList.remove("active");
        activeAudio.previousElementSibling.classList.add("active");

        informationUpdate(activeAudio.previousElementSibling.dataset.index);
    } else {
        activeAudio.classList.remove("active");
        trackItemsWrapper.lastElementChild.classList.add("active");

        informationUpdate(musics.length - 1);
    }
});

volumeButton.addEventListener("click", (e) => {
    volumeWrapper.classList.toggle("active");
});

volumeWrapper.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;

    let volumeButton = e.target.dataset.volume;
    switch (volumeButton) {
        case "volumePlus":
            if (audioTrack.volume < 1) {
                audioTrack.volume += 0.1;
            }
            break;

        case "volumeMinus":
            if (audioTrack.volume > 0) {
                audioTrack.volume -= 0.1;
            }
            break;
    }
});

audioTrack.addEventListener("volumechange", (e) => {
    let currentVolume = Math.round(audioTrack.volume * 100);
    volumeNumber.textContent = currentVolume;

    if (currentVolume > 66) {
        highVolumeSymbol.style.display = "block";
        mediumVolumeSymbol.style.display = "none";
        lowVolumeSymbol.style.display = "none";
        volumeCross.style.display = "none";
    } else if (currentVolume > 33) {
        highVolumeSymbol.style.display = "none";
        mediumVolumeSymbol.style.display = "block";
        lowVolumeSymbol.style.display = "none";
        volumeCross.style.display = "none";
    } else if (currentVolume > 0) {
        highVolumeSymbol.style.display = "none";
        mediumVolumeSymbol.style.display = "none";
        lowVolumeSymbol.style.display = "block";
        volumeCross.style.display = "none";
    } else {
        highVolumeSymbol.style.display = "none";
        mediumVolumeSymbol.style.display = "none";
        lowVolumeSymbol.style.display = "none";
        volumeCross.style.display = "block";
    }
});

audioTrack.addEventListener("ended", (e) => {
    nextButton.click();
});
