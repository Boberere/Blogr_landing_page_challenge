const burgerBtn = document.querySelector('.nav-items__burger-menu__burger-btn')
const burgerBtnBurger = document.querySelector('.nav-items__burger-menu__burger-btn__burger-icon')
const burgerBtnClose = document.querySelector('.nav-items__burger-menu__burger-btn__close-icon')
const burgerMenu = document.querySelector('.nav-items__burger-menu__burger-window')

const burgerMenuItem1 = document.querySelector('.burger-item1')
const burgerMenuItem2 = document.querySelector('.burger-item2')
const burgerMenuItem3 = document.querySelector('.burger-item3')

const burgerMenuList1 = document.querySelector('.burger-list1')
const burgerMenuList2 = document.querySelector('.burger-list2')
const burgerMenuList3 = document.querySelector('.burger-list3')

const burgerMenuListItems1 = document.querySelectorAll('.burger-list1 .nav-items__burger-menu__burger-window-list-item')
const burgerMenuListItems2 = document.querySelectorAll('.burger-list2 .nav-items__burger-menu__burger-window-list-item')
const burgerMenuListItems3 = document.querySelectorAll('.burger-list3 .nav-items__burger-menu__burger-window-list-item')

const openMenu = () => {
    burgerBtnBurger.classList.toggle('disabled')
    burgerBtnClose.classList.toggle('blockActive')
    burgerMenu.classList.toggle('flexActive')
    burgerMenuList1.classList.remove('active')
    burgerMenuList2.classList.remove('active')
    burgerMenuList3.classList.remove('active')
}
const burgerItemBtn = () => {
    burgerMenuList1.classList.toggle('active')
    burgerMenuList2.classList.remove('active')
    burgerMenuList3.classList.remove('active')
}
const burgerItemBtn2 = () => {
    burgerMenuList2.classList.toggle('active')
    burgerMenuList1.classList.remove('active')
    burgerMenuList3.classList.remove('active')
}
const burgerItemBtn3 = () => {
    burgerMenuList3.classList.toggle('active')
    burgerMenuList2.classList.remove('active')
    burgerMenuList1.classList.remove('active')
}
const closeMenu = () => {
    burgerMenu.classList.remove('flexActive')
}
for (const items of burgerMenuListItems1) {
    items.addEventListener('click', closeMenu)
}
for (const items of burgerMenuListItems2) {
    items.addEventListener('click', closeMenu)
}
for (const items of burgerMenuListItems3) {
    items.addEventListener('click', closeMenu)
}

burgerMenuItem1.addEventListener('click', burgerItemBtn)
burgerMenuItem2.addEventListener('click', burgerItemBtn2)
burgerMenuItem3.addEventListener('click', burgerItemBtn3)
burgerBtn.addEventListener('click', openMenu)
