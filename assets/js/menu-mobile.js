const menuEl = document.querySelector(".menu-mobile")
const menuButtonEl = document.querySelector(".menu-mobile .menu-button")
menuButtonEl.onclick = () => {
    const active = menuEl.classList.toggle("active")
    if(active)
        menuButtonEl.classList.toggle("active")
    else
        menuButtonEl.classList.toggle("active")
}
