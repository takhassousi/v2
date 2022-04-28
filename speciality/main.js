// if ("serviceWorker" in navigator) navigator.serviceWorker.register('../sw.js').catch(err => console.log(err))

// header functions Start

const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    listSps = document.getElementById("list-sps"),
    rateTxt = document.querySelector(".rate >span"),
    sps = document.getElementById("sps"),
    faces = document.querySelectorAll(".faces i"),
    closeMenu = document.querySelector("header .menu .fa-xmark");
menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);

// header functions End

window.onscroll = () => watchMe.forEach(e => (e.getBoundingClientRect().top - window.innerHeight * .7 < 0) && e.classList.add("act"))

closeMenu.onclick = () => menuList.style.display = "none"

listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";

if (localStorage.getItem(document.querySelector("h1").textContent)) {
    rateTxt.textContent = "شكرا على تقييمك"
    rateTxt.style.animation = " fadeIn_Up 1.8s  forwards"
    faces[0].parentElement.remove()
    document.querySelector(".rate > .fa-heart").style.display = "block"
}
faces.forEach((e, i) => e.onclick = () => {
    if (localStorage.getItem(document.querySelector("h1").textContent)) return
    const rate = 5 - i
    localStorage.setItem(document.querySelector("h1").textContent, rate)
    rateTxt.textContent = "شكرا على تقييمك"
    rateTxt.style.animation = " fadeIn_Up 1.8s  forwards"
    faces[0].parentElement.remove()
    document.querySelector(".rate > .fa-heart").style.display = "block"
})