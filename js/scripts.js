const seabtn = document.getElementById('sea');
const rainbtn = document.getElementById('rain');
const forestbtn = document.getElementById('forest');



seabtn.addEventListener('click', function onClick(event) {
  
    document.body.style.background = "url('./images/3.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
    document.body.style.transition = '0.01s';

});

rainbtn.addEventListener('click', function onClick(event) {
  
    document.body.style.background = "url('./images/7.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
    document.body.style.transition = '0.01s';
});

forestbtn.addEventListener('click', function onClick(event) {
  
    document.body.style.background = "url('./images/5.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
    document.body.style.transition = '0.01s';

});

function toggleDiv() {
    let x = document.getElementById("nature");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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