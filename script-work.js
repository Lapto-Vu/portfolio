const pageOneClick = document.querySelector(".js-page-one-click")
const pageTwoClick = document.querySelector(".js-page-two-click")
const pageThreeClick = document.querySelector(".js-page-three-click")

const pageOne = document.querySelector(".js-page-one")
const pageTwo = document.querySelector(".js-page-two")
const pageThree = document.querySelector(".js-page-three")

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

function handlePageThree () {
    pageUp(pageThree);
    pageDown(pageTwo);
    pageDown(pageOne);
}


function handlePageTwo () {
    pageUp(pageTwo);
    pageDown(pageThree);
    pageDown(pageOne);
}

function handlePageOne () {
    pageUp(pageOne);
    pageDown(pageThree);
    pageDown(pageTwo);
}

pageOneClick.addEventListener("click", handlePageOne);
pageTwoClick.addEventListener("click", handlePageTwo);
pageThreeClick.addEventListener("click", handlePageThree);