const menuEl = document.querySelector("aside#menu")
const menuButtonEl = document.querySelector("header .menu-button")
menuButtonEl.onclick = () => {
    const active = menuEl.classList.toggle("active")
    if(active)
        menuButtonEl.classList.toggle("active")
    else
        menuButtonEl.classList.toggle("active")
}
