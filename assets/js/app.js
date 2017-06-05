//VARIABLES GLOBALES
var slider = $("#slider");
var next_btn = $("#btn-next");
var previous_btn = $("#btn-previous");
//FUNCIONES
var moveDivLeft = function (element) {
    element.css("margin-left", "-" + 100 + "%");
}
var moveImgForward = function () {
  $("#slider div:last").insertBefore("#slider div:first");
  moveDivLeft(slider);
}
var moveImgBack = function () {
  $("#slider div:first").insertAfter("#slider div:last");
  moveDivLeft(slider);
}
function nextImage() {
  slider.animate({'margin-left': "-" + 200 + "%"},
                  1500, moveImgBack);
}
function previousImage() {
  slider.animate({'margin-left': 0},
                  1500, moveImgForward);
}
//EVENTOS
next_btn.on("click", nextImage);
previous_btn.on("click", previousImage);
//Inicializando el Slider
moveImgForward();
//Reproducción Automática del Slider
var autoPlay = setInterval(nextImage, 5000);
$(document).ready(autoPlay);
