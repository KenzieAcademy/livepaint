const bitmap = new Bitmap(60, 50);
const toolbar = document.getElementById("toolbar");
const palette = document.getElementById("palette");

var tool = "draw";
var paint_color = "green";

bitmap.render(document.getElementById("bitmap1"));

toolbar.addEventListener("click", function(event) {
    if(event.target.id === "toolbar") return;
    var cur_selection = toolbar.getElementsByClassName("selected");
    if(cur_selection.length>0) cur_selection[0].classList.remove("selected");
    event.target.classList.add("selected");
    tool = event.target.id;
});

palette.addEventListener("click", function(event) {
    if(event.target.id === "palette") return;
    var cur_selection = palette.getElementsByClassName("selected");
    if(cur_selection.length>0) cur_selection[0].classList.remove("selected");
    event.target.classList.add("selected");
    paint_color = event.target.style.backgroundColor;
});

document.getElementById("grid").addEventListener("click", function(event) {
    document.body.classList.toggle("show_grid");
});