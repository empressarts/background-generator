var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var div = document.querySelector(".btn");

//set initial color value
color1.value = "#ff0000";
color2.value = "#ffff00";



//initial CSS linear gradient property
css.textContent = body.style.background =
    "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";



function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

function randomize() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    return col;
}

function setRandomColor() {
    var color1Update = randomize();
    var color2Update = randomize();

    body.style.background =
        "linear-gradient(to right, " +
        color1Update +
        ", " +
        color2Update +
        ")";

    css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//randomize
//create button
var button = document.createElement("button");
button.appendChild(document.createTextNode("Randomize"));
div.appendChild(button);

//add event listener to button
button.addEventListener("click", setRandomColor);