const yumi = document.querySelector(".yumi");
const yumiTitle = document.querySelector(".yumi-title");
const yumiTag = document.querySelector(".yumi-tag");
const one = document.querySelector(".one")
const bottom = document.querySelector(".bottom");
const topi = document.querySelector(".top");


one.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    yumi.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    yumiTitle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    yumiTag.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    yumiTag.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    bottom.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    one.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    topi.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

one.addEventListener("mouseenter", (e) => {
    yumi.style.transition = `all 0.5s ease`
    yumi.style.transform = `scale(1.1)`
    yumiTitle.style.transition = `all 0.5s ease`
    yumiTitle.style.transform = `scale(1.1)`
    yumiTag.style.transition = `all 0.5s ease`
    yumiTag.style.transform = `scale(1.1)`
    bottom.style.transition = `all 0.5s ease`
    bottom.style.transform = `scale(1.1)`
    one.style.transition = `all 0.5s ease`
    one.style.transform = `scale(1.1)`
    topi.style.transition = `all 0.5s ease`
    topi.style.transform = `scale(1.1)`
})

one.addEventListener("mouseleave", (e) => {
    yumi.style.transition = `all 0.5s ease`
    yumi.style.transform = `rotateY(0deg) rotateX(0deg)`;
    yumiTitle.style.transition = `all 0.5s ease`
    yumiTitle.style.transform = `rotateY(0deg) rotateX(0deg)`;
    yumiTag.style.transition = `all 0.5s ease`
    yumiTag.style.transform = `rotateY(0deg) rotateX(0deg)`;
    bottom.style.transition = `all 0.5s ease`
    bottom.style.transform = `rotateY(0deg) rotateX(0deg)`;
    one.style.transition = `all 0.5s ease`
    one.style.transform = `rotateY(0deg) rotateX(0deg)`;
    topi.style.transition = `all 0.5s ease`
    topi.style.transform = `rotateY(0deg) rotateX(0deg)`;
})