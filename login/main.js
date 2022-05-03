const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    listSps = document.getElementById("list-sps"),
    sps = document.getElementById("sps"),
    closeMenu = document.querySelector("header .menu .fa-xmark");
menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);
closeMenu.onclick = () => menuList.style.display = "none"
listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";

// ########
const switchBtn = document.querySelector('span.switch'),
    myForm = document.querySelector("main form"),
    h1 = document.querySelector('main .title h1'),
    sendBtn = document.querySelector('main form [type="submit"]'),
    inputs = document.querySelectorAll('main form .reg'),
    span = document.querySelector('main .title span');
switchBtn.onclick = () => {
    if (myForm.action.includes('login')) {
        inputs.forEach(e => e.style.display = "none")
        myForm.action = "/register"
        switchBtn.textContent = h1.textContent
        sendBtn.textContent = h1.textContent = "تسجيل الدخول"
        span.textContent = "ساعد في التعريف بالتخصصات وتقديم النصائح للطلبة الجدد"
        return
    }
    inputs.forEach(e => e.style.display = "unset")
    myForm.action = "/login"
    sendBtn.textContent = h1.textContent = switchBtn.textContent
    switchBtn.textContent = "إنشاء حساب"
    span.textContent = "انشئ حساب وساهم في مساعدة الطلبة على إختيار تخصص"
    return
}