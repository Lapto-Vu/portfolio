const nav = document.querySelector("nav");
const so = document.querySelector(".so");

function soEnter() {
    nav.className="so-enter";
}

function basic() {
    nav.className="basic"
}

function mouseEnter() {
    so.addEventListener("mouseenter", soEnter);
    so.addEventListener("mouseleave", basic);
}

function init() {
    mouseEnter();
}

init();