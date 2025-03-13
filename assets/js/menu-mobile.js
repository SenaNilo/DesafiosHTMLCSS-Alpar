const menuEl = document.querySelector("ul.menu-links")
const menuButtonEl = document.querySelector(".mobile-menu .menu-button")
menuButtonEl.addEventListener('click', () => {
    const active = menuEl.classList.toggle("active")
    if(active)
        menuButtonEl.classList.toggle("active")
    else
        menuButtonEl.classList.toggle("active")
})

/* Wikipedia button para responsividade */
const btnDropdown = document.querySelector("nav .btn.dropdown")
const dropdownContent = document.querySelector("nav .dropdown-content")

btnDropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle("active")
})