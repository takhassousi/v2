const showMore = document.querySelectorAll('ul.showMore li:not(:last-child):not(:first-child)')
moreMore = document.getElementById('moreMore');
const max = 16
moreMore.onclick = () => {
    const last = max - max % 5
    if (+showMore[showMore.length - 1].textContent > last) return
    if (+showMore[showMore.length - 1].textContent == last)
        for (let i = 1; i <= (5 - max % 5); i++) showMore[showMore.length - i].style.display = "none"
    showMore.forEach(e => e.textContent = 5 + +e.textContent);
}
lessLess = document.getElementById('lessLess');

lessLess.onclick = () => {
    if (+showMore[0].textContent == 1) return
    showMore.forEach(e => {
        e.style.display = "block"
        e.textContent = +e.textContent - 5
    });
}


const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    listSps = document.getElementById("list-sps"),
    sps = document.getElementById("sps"),
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
window.onscroll = () => watchMe.forEach(e => (e.getBoundingClientRect().top - window.innerHeight * .9 < 0) && e.classList.add("act"))

listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";
window.scrollTo(0, 2)