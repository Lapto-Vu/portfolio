const pageOneClick = document.querySelector(".js-page-one-click")
const pageTwoClick = document.querySelector(".js-page-two-click")

const pageOne = document.querySelector(".js-page-one")
const pageTwo = document.querySelector(".js-page-two")


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

function handlePageTwo () {
    pageUp(pageTwo);
    pageDown(pageOne);
}

function handlePageOne () {
    pageUp(pageOne);
    pageDown(pageTwo);
}


pageTwoClick.addEventListener("click", handlePageTwo);
pageOneClick.addEventListener("click", handlePageOne);