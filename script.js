// JS
let element = document.getElementById("jsElement");
let width = 0;
let endWidth = 200;
let speed = 250;
let increment = (endWidth - width) / speed;

let animation = setInterval(function () {
    width = width+increment;
    element.style.width = width + "px";
    if (width >= endWidth) {
        element.style.width = endWidth + "px";
        clearInterval(animation);
    }
}, 1);


// JQuery
$("#jQueryElement").animate({ width: "200px" }, 1000);
