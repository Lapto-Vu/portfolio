const pageFourClick = document.querySelector(".js-page-four-click")
const pageFiveClick = document.querySelector(".js-page-five-click")

const pageFour = document.querySelector(".js-page-four")
const pageFive = document.querySelector(".js-page-five")


function pageDown(e) {
    e.style.zIndex="-1";
    e.style.position="absolute";
    e.style.opacity="0";
}

function pageUp(e) {
    e.style.zIndex="1";
    e.style.position="relative";
    e.style.opacity="1";
}

function handlePageFour () {
    pageUp(pageFour);
    pageDown(pageFive);
}

function handlePageFive () {
    pageUp(pageFive);
    pageDown(pageFour);
}

pageFourClick.addEventListener("click", handlePageFour);
pageFiveClick.addEventListener("click", handlePageFive);