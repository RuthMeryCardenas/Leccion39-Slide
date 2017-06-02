var slider = $("#slider");
var next_btn = $("#btn-next");
var previous_btn = $("#btn-previous");
//inicializando las imágenes
$("#slider div:last").insertBefore("#slider div:first");
slider.css("margin-left", "-" + 100 + "%");
// funciona hasta aqui
function nextImage() {
  slider.animate({'margin-left': "-" + 200 + "%"},
                  700, function () {
                  $("#slider div:first").insertAfter("#slider div:last");
                  slider.css("margin-left", "-" + 100 + "%");
                });
}
function previousImage() {

}
next_btn.on("click", function () {
  nextImage();
  console.log("hola");
});
previous_btn.on("click", function () {
  previousImage()
});
