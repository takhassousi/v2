// if ("serviceWorker" in navigator) navigator.serviceWorker.register('../sw.js').catch(err => console.log(err))

// header functions Start

const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    listSps = document.getElementById("list-sps"),
    sps = document.getElementById("sps"),
    closeMenu = document.querySelector("header .menu .fa-xmark");
menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);

// header functions End

window.onscroll = () => {
    document.body.setAttribute("style", `--deg: ${230-window.scrollY/7}deg`)
    watchMe.forEach(e => {
        if (e.getBoundingClientRect().top - window.innerHeight * .7 < 0) e.classList.add("act")
    })
}

closeMenu.onclick = () => menuList.style.display = "none"

listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";