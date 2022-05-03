const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    showMoreDetails = document.querySelectorAll("td.show i"),
    watchMe = document.querySelectorAll(".watchMe"),
    listSps = document.getElementById("list-sps"),
    lessLess = document.getElementById('lessLess'),
    sps = document.getElementById("sps"),
    closeMenu = document.querySelector("header .menu .fa-xmark"),
    showMore = document.querySelectorAll('ul.showMore li:not(:last-child):not(:first-child)'),
    moreMore = document.getElementById('moreMore'),
    max = 16;
moreMore.onclick = () => {
    const last = max - max % 5
    if (+showMore[showMore.length - 1].textContent > last) return
    if (+showMore[showMore.length - 1].textContent == last)
        for (let i = 1; i <= (5 - max % 5); i++) showMore[showMore.length - i].style.display = "none"
    showMore.forEach(e => e.textContent = 5 + +e.textContent);
}

lessLess.onclick = () => {
    if (+showMore[0].textContent == 1) return
    showMore.forEach(e => {
        e.style.display = "block"
        e.textContent = +e.textContent - 5
    });
}

menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);
closeMenu.onclick = () => menuList.style.display = "none"
listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";


showMoreDetails.forEach(e => e.onclick = () => {
    const tar = e.parentElement.parentElement.nextElementSibling
    if (tar.classList.contains("gInfo")) {
        console.log(tar);
        tar.classList.toggle('showMe')
    }
})