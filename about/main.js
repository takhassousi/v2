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
window.onscroll = () => {
    watchMe.forEach(e => (e.getBoundingClientRect().top - window.innerHeight * .7 < 0) && e.classList.add("act"))
    if (nums[0].getBoundingClientRect().top - window.innerHeight * .75 > 0 || done) return;
    done = true
    nums.forEach(a => {
        const limit = a.dataset.lim,
            int = setInterval(() => {
                (+a.textContent >= +limit) && clearInterval(int)
                a.textContent++
            }, 2000 / limit)
    })
}
listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";