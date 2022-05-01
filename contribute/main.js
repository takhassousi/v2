const menuBtn = document.querySelector("header i.fa-bars"),
    menuList = document.querySelector("header .menu"),
    watchMe = document.querySelectorAll(".watchMe"),
    general = document.querySelector('header p'),
    headerImg = document.querySelector('header [type=file]'),
    imgBox = document.querySelector(".imageBox"),
    c = (t) => t.trim().replace(/\s{2,}/g, ' '),
    addPar = document.querySelector('.content .fa-plus'),
    listSps = document.getElementById("list-sps"),
    headerLabel = document.querySelector('header label'),
    CreatAccountForm = document.querySelector(".account form"),
    nameDiv = document.getElementById("name"),
    imgDelete = () => document.querySelectorAll('.content figure .fa-xmark').forEach(e => e.onclick = () => e.parentElement.remove()),

    accountWin = document.querySelector(".account"),
    sps = document.getElementById("sps"),
    closeMenu = document.querySelector("header .menu .fa-xmark");
menuBtn.onclick = () => {
    menuList.style.display = "flex";
    sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount}px`);
}
setTimeout(() => sps.setAttribute("style", `--h:${sps.children[0].offsetHeight*sps.childElementCount +8}px`), 0);

closeMenu.onclick = () => menuList.style.display = "none"

listSps.onclick = () => sps.classList.toggle("act") ? listSps.firstChild.style.transform = "rotate(-180deg)" : listSps.firstChild.style.transform = "rotate(0deg)";
const editIt = () => document.querySelectorAll(".fa-pen-to-square").forEach(e => e.onclick = () => {
    const oldOne = document.querySelector("[contenteditable]")
    if (oldOne && e.nextElementSibling != oldOne) oldOne.removeAttribute("contenteditable")
    e.classList.toggle('fa-floppy-disk')
    e.classList.toggle('fa-pen-to-square') && getData();
    e.nextElementSibling.toggleAttribute("contenteditable")
})
editIt()


const btns = document.querySelectorAll(".styleBtns button")
document.execCommand("defaultParagraphSeparator", false, "p");
btns.forEach(e => e.onclick = () => {
    const command = e.dataset.c
    const tar = document.querySelector("[contenteditable]")
    if (!tar || tar.tagName == "H2" || tar == general) return
    if (command == "insertImage") {
        document.documentElement.style.overflow = "hidden"
        imgBox.style.display = "block"
        imgLink.value = "https://i.stack.imgur.com/70CQi.png"
        return
    }
    if (command == "createLink") {
        const url = prompt("the URL :", "https://")
        document.execCommand(command, false, url)
        return
    }
    document.execCommand(command, false, null)
})

const imgInput = document.querySelector('.imageBox [type="file"]')
document.querySelector(".imageBox .fa-xmark").onclick = () => {
    imgBox.style.display = "none"
    document.documentElement.style.overflow = "unset"
    imgBox.reset()
}
const imgData = document.querySelector('.imgData')
const imgLink = document.querySelector('.imageBox [type="url"]')
imgInput.onchange = async(b) => {
    handleFileSelect(imgInput.files[0])
    imgLink.value = ""
    imgLink.setAttribute("disabled", "")
    imgData.innerHTML = ` الصورة:  ${imgInput.files[0].name}<br>حجم الصورة :${(imgInput.files[0].size/1024).toFixed(2)}kb`
}

imgBox.onsubmit = (e) => {
    e.preventDefault()
    if (imgInput.files[0]) document.querySelector('[contentEditAble]').innerHTML += `<figure><img src="${imageSrc}" alt="" /></figure>`
    else document.querySelector('[contentEditAble]').innerHTML += `<figure><i class="fa-solid fa-xmark"></i><img src="${imgLink.value}" alt="" /></figure>`
    imgBox.reset()
    imgDelete()
}



let imageSrc
async function handleFileSelect(f) {
    const reader = new FileReader();
    reader.onload = (f) => imageSrc = f.target.result;
    reader.readAsDataURL(f);
}

headerImg.onchange = () => {
    const reader = new FileReader();
    const f = headerImg.files[0]
    reader.onload = (f) => {
        const figure = document.createElement('figure')
        figure.innerHTML = `<i class="fa-solid fa-xmark"></i><img src="${f.target.result}" alt="">`
        headerLabel.parentElement.insertBefore(figure, headerLabel)
        headerLabel.style.display = 'none'
        const rmBtn = document.querySelector('header figure .fa-xmark')
        rmBtn.onclick = () => {
            headerLabel.style.display = 'block'
            rmBtn.parentElement.remove()
        }
    };
    reader.readAsDataURL(f);
}
const closeDialogue = document.querySelector('.dialogue .close')
closeDialogue.onclick = () => closeDialogue.parentElement.style.display = "none"
const metaData = document.querySelector('.metaData')
const titleDialogue = document.querySelector('.dialogue .t-s')
const textDialogue = document.querySelector('.dialogue p')
const Dialogue = document.querySelector('.dialogue')

function verify() {
    console.log(metaData.specialityAr.value.length > 3);
    if (metaData.specialityAr.value.length < 3) errorHighlight(metaData.specialityAr)
    const select = [...selectMeta].find(e => e.value == "إختر")
    const text = [...document.querySelectorAll('.con')].find(e => c(e.textContent).length < 20)
    if (select) errorHighlight(select)
    if (text) errorHighlight(text)
    if (!document.querySelector('header img')) errorHighlight(headerLabel)

}

const sendArticle = document.querySelector('.submitIt .send')
const selectMeta = document.querySelectorAll(".metaData select")

function errorHighlight(e) {
    // e.style.border="1px solid red"
    e.classList.add('errorHighlight')
    e.scrollIntoView({ block: "center" })
    titleDialogue.textContent = "معلومات ناقصة"
    textDialogue.textContent = "الرجاء ملء جميع المعلومات قبل إرسال المقال"
    closeDialogue.textContent = "حسنا"
    Dialogue.style.display = "block"
    Dialogue.classList.remove('succeed')
    Dialogue.classList.add('error')
    throw Error('Missing Information')
}
sendArticle.onclick = () => {
    document.querySelector('.errorHighlight') && document.querySelector('.errorHighlight').classList.remove('errorHighlight')
    verify()
    titleDialogue.textContent = "تم إرسال المقال بنجاح"
    textDialogue.textContent = "سيتم معالجة المقال و نشره في أقرب وقت نشكركم على تعاونكم معنا"
    closeDialogue.textContent = "شكرا"
    Dialogue.style.display = "block"
    Dialogue.classList.remove('error')
    Dialogue.classList.add('succeed')
}
addPar.onclick = () => {
    addPar.insertAdjacentHTML('beforebegin', `<i class="fa-solid fa-pen-to-square"></i><h2>طريقة الدراسة في السنة اولى </h2><i class="fa-solid fa-pen-to-square"></i><div class="para con">Lorem ipsum dolor sit amet.</div>`)
    editIt()
}
const contentElem = document.querySelector('.content')
const personalities = document.querySelectorAll('.personality input')
personalities[0].nextElementSibling.textContent

function getData() {
    const h2 = document.querySelectorAll('.content h2'),
        p = document.querySelectorAll('.content .para');
    let content = []
    for (let i = 0; i < h2.length; i++) {
        content.push(c(h2[i].textContent))
        content.push(c(p[i].innerHTML))
    }
    const all = {
        specialityAr: metaData.specialityAr.value,
        specialityFr: selectMeta[0].value,
        followTo: selectMeta[1].value,
        category: selectMeta[2].value,
        p: c(general.textContent),
        image: document.querySelector('header img') && document.querySelector('header img').src,
        priorities: [selectMeta[3].value, selectMeta[4].value, selectMeta[5].value],
        personalities: [...personalities].filter(e => e.checked).map(e => e.nextElementSibling.textContent),
        content
    }
    localforage.setItem('All', all)
}

async function extractData() {
    const all = await localforage.getItem('All')
    const content = all.content
    selectMeta[0].value = all.specialityFr
    selectMeta[1].value = all.followTo
    selectMeta[2].value = all.category
    metaData.specialityAr.value = all.specialityAr
    all.priorities.forEach((e, i) => selectMeta[i + 3].value = e)
    personalities.forEach((e) => { all.personalities.includes(e.nextElementSibling.textContent) ? e.checked = true : e.checked = false; })
    document.querySelectorAll('.content h2 , .content .para , .fa-pen-to-square').forEach(e => e.remove())
    for (let i = 0; i < content.length; i++)
        contentElem.innerHTML += `<i class="fa-solid fa-pen-to-square"></i><h2>${content[2*i]}</h2><i class="fa-solid fa-pen-to-square"></i><div class="para con">${content[2*i+1]}</div>`
    editIt()
}