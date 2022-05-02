const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    sps = document.getElementById("sps"),
    windowPp = document.querySelector('.editPr'),
    currentPp = document.querySelector('.personalImg img'),
    PpInput = document.querySelector('.editPr [type=file]'),
    PpPreview = document.querySelector('.editPr img'),
    changePpBtn = document.querySelector('.personalImg .fa-pen-to-square'),
    cancelBtn = document.querySelector('.btns #nBtn'),
    acceptBtn = document.querySelector('.btns #yBtn'),
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

cancelBtn.onclick = () => {
    windowPp.style.display = "none"
    document.documentElement.style.overflow = "unset"
}
acceptBtn.onclick = () => {
    currentPp.src = PpPreview.src
    windowPp.style.display = "none"
    document.documentElement.style.overflow = "unset"
}
changePpBtn.onclick = () => {
    windowPp.style.display = "flex"
    document.documentElement.style.overflow = "hidden"
}

PpInput.onchange = () => {
    const reader = new FileReader();
    const f = PpInput.files[0]
    reader.onload = (f) => {
        imageSrc = f.target.result
        PpPreview.src = imageSrc
    };
    reader.readAsDataURL(f);
}