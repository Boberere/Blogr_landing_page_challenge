const burgerBtn = document.querySelector('.nav-items__burger-menu__burger-btn')
const burgerBtnBurger = document.querySelector('.nav-items__burger-menu__burger-btn__burger-icon')
const burgerBtnClose = document.querySelector('.nav-items__burger-menu__burger-btn__close-icon')
const burgerMenu = document.querySelector('.nav-items__burger-menu__burger-window')


const openMenu = () => {
    burgerBtnBurger.classList.toggle('disabled')
    burgerBtnClose.classList.toggle('blockActive')
    burgerMenu.classList.toggle('flexActive')
}
burgerBtn.addEventListener('click', openMenu)
console.log(burgerBtnBurger);
console.log(burgerBtn);