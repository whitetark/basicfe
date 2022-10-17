//Task №1
const first = document.getElementById("first");
const second = document.querySelector(".second");

first.onclick = function(){
    first.style.background = getRandomColor();
    first.style.color = getRandomColor();
}
second.onclick = function(){
    second.style.background = getRandomColor();
    second.style.color = getRandomColor();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Task №2
const zoomScale = 1.1;

function add(){
    var img = new Image();
    img.src = 'img/denver02.jpg';
    img.style.width = '700px';
    img.style.height = 'auto';
    img.id = "image2";
    var divImg = document.getElementById('newImg');
    divImg.appendChild(img);
}

function zoomIn(){
    var image = document.getElementById("image2");
    var width = image.clientWidth;
    image.style.width = width + 100 + "px";
}

function zoomOut(){
    var image = document.getElementById("image2");
    var width = image.clientWidth;
    image.style.width = width - 100 + "px";
}

function remove(){
    var image = document.getElementById("image2");
    image.remove();
}