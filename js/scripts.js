const seabtn = document.getElementById('sea');
const rainbtn = document.getElementById('rain');
const forestbtn = document.getElementById('forest');

function toggleDiv() {
    let x = document.getElementById("nature");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('toggle-div').innerHTML = "Hide Player";
    } else {
      x.style.display = "none";
      document.getElementById('toggle-div').innerHTML = "Show Player";
    }
}

function playBtn() {
    const element = document.getElementById("toggle-icon");
    if (element.className == "ri-play-fill") {
      element.className = "ri-pause-circle-fill";
    } else {
      element.className = "ri-play-fill";
    }
  }

function playAudio() {
    let audioElement= document.getElementById("forest-audio");
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
};

let volume = document.getElementById('volume-slider');
let audio= document.getElementById("forest-audio");
volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
})