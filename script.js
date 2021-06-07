const pageOneClick = document.querySelector(".js-page-one-click")
const pageTwoClick = document.querySelector(".js-page-two-click")

const pageOne = document.querySelector(".js-page-one")
const pageTwo = document.querySelector(".js-page-two")


function handlePageTwo () {
    pageOne.style.zIndex = "-1";
    pageTwo.style.zIndex = "1"; 
}

function handlePageOne () {
    pageOne.style.zIndex = "1";
    pageTwo.style.zIndex = "-1"; 
}


pageTwoClick.addEventListener("click", handlePageTwo);
pageOneClick.addEventListener("click", handlePageOne);