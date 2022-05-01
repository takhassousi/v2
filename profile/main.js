const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    sps = document.getElementById("sps"),
    listSps = document.getElementById("list-sps"),
    nums = document.querySelectorAll(".cards .card span"),
    closeMenu = document.querySelector("header .menu .fa-xmark");

menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);
closeMenu.onclick = () => menuList.style.display = "none"

// header functions End
let done = false
window.onscroll = () => {
    watchMe.forEach(e => (e.getBoundingClientRect().top - window.innerHeight * .7 < 0) && e.classList.add("act"))
}

listSps.onclick = () => sps.classList.toggle("act")