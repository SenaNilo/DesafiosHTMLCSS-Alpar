const menuEl = document.querySelector("ul.menu-links")
const menuButtonEl = document.querySelector(".mobile-menu .menu-button")
menuButtonEl.onclick = () => {
    const active = menuEl.classList.toggle("active")
    if(active)
        menuButtonEl.classList.toggle("active")
    else
        menuButtonEl.classList.toggle("active")
}
