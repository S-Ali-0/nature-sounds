const oceanbtn = document.getElementById('ocean');
const rainbtn = document.getElementById('rain');
const forestbtn = document.getElementById('forest');

oceanbtn.addEventListener('click', function onClick(event) {
  
    document.body.style.background = "url('./images/1.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';

});

rainbtn.addEventListener('click', function onClick(event) {
  
    document.body.style.background = "url('./images/3.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
});

forestbtn.addEventListener('click', function onClick(event) {
  
    document.body.style.background = "url('./images/5.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';

});
