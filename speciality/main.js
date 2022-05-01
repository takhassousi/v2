// if ("serviceWorker" in navigator) navigator.serviceWorker.register('../sw.js').catch(err => console.log(err))

// header functions Start

const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    listSps = document.getElementById("list-sps"),
    cancelR = document.querySelector(".cancelR"),
    CreatAccountForm = document.querySelector(".account form"),
    nameDiv = document.getElementById("name"),
    loginSwitch = document.querySelectorAll(".account .choose >span"),
    reply = document.querySelectorAll(".rpl"),
    accountWin = document.querySelector(".account"),
    cmnTitle = document.querySelector(".commentInput .h3"),
    rateTxt = document.querySelector(".rate >span"),
    closeWin = document.querySelector(".account .fa-xmark"),
    sps = document.getElementById("sps"),
    commentForm = document.querySelector(`form.commentInput`),
    faces = document.querySelectorAll(".faces i"),
    closeMenu = document.querySelector("header .menu .fa-xmark");
menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);

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

reply.forEach(e =>
    e.onclick = () => {
        accountWin.style.display = "block"
        document.documentElement.style.overflow = "hidden"
        cmnTitle.scrollIntoView({ block: "center" })
        cancelR.style.display = "block"
        const userName = e.parentElement.querySelector(".userName").textContent
        cmnTitle.innerHTML = ` اترك رداً على <b class="replyTo">${userName}</b>`
    })
cancelR.onclick = (e) => {
    e.preventDefault()
    cancelR.style.display = "none"
    cmnTitle.innerHTML = `اترك تعليقاً`
}

loginSwitch[0].onclick = () => {
    console.log("hi");
    loginSwitch[0].classList.add("act")
    loginSwitch[1].classList.remove("act")
    nameDiv.style.display = "none"
    CreatAccountForm.submit.value = "الدخول"
}
loginSwitch[1].onclick = () => {
    CreatAccountForm.submit.value = "إنشاء"
    nameDiv.style.display = "block"
    loginSwitch[1].classList.add("act")
    loginSwitch[0].classList.remove("act")
}
closeWin.onclick = () => {
    document.documentElement.style.overflow = "unset"
    closeWin.parentElement.style.display = "none"
}

commentForm.onsubmit = (e) => {
    e.preventDefault()
    document.documentElement.style.overflow = "hidden"
    accountWin.style.display = "block"
}