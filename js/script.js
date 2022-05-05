//========================================================================================
// MOBILE MENU <==
//========================================================================================
// -- selectors
const burgerIcon = document.querySelector('.nav__menu-burger-btn-icon')
const closeIcon = document.querySelector('.nav__menu-burger-btn-close-icon')
const burgerBtn = document.querySelector('.nav__menu-burger-btn')
const burgerMenu = document.querySelector('.nav__burger-menu')
const burgerMenuProductBtn = document.querySelector('.nav__burger-menu-btns--product')
const burgerMenuCompanyBtn = document.querySelector('.nav__burger-menu-btns--company')
const burgerMenuConnectBtn = document.querySelector('.nav__burger-menu-btns--connect')
const burgerMenuProductItems = document.querySelector('.nav__burger-menu-items--product')
const burgerMenuCompanyItems = document.querySelector('.nav__burger-menu-items--company')
const burgerMenuConnectItems = document.querySelector('.nav__burger-menu-items--connect')
const burgerMenuItemsItem = document.querySelectorAll('.nav__burger-menu-items-item')
const burgerArrow1 = document.querySelector('.nav__burger-menu-btns-arrow--product')
const burgerArrow2 = document.querySelector('.nav__burger-menu-btns-arrow--company')
const burgerArrow3 = document.querySelector('.nav__burger-menu-btns-arrow--connect')
// -- arrays
const burgerArrow = [burgerArrow1, burgerArrow2, burgerArrow3]
// -- functions
const openBurgerMenu = () => {
	burgerIcon.classList.toggle('nav__menu-burger-btn-icon-hide')
	closeIcon.classList.toggle('nav__menu-burger-btn-close-icon-display')
	burgerMenu.classList.toggle('nav__burger-menu-active')
	const burgerMenuAllItems = [burgerMenuProductItems, burgerMenuCompanyItems, burgerMenuConnectItems]
	burgerMenuAllItems.forEach(item => item.classList.remove('nav__burger-menu-items-active'))
	if (burgerIcon.classList.contains('nav__menu-burger-btn-icon-hide')) {
		burgerArrow.forEach(item => (item.style.transform = 'rotate(0deg)'))
	}
}
const burgerHandles = (x, y, z, arrow) => {
	x.classList.toggle('nav__burger-menu-items-active')
	y.classList.remove('nav__burger-menu-items-active')
	z.classList.remove('nav__burger-menu-items-active')
	if (x.classList.contains('nav__burger-menu-items-active')) {
		burgerArrow.forEach(item => (item.style.transform = 'rotate(0deg)'))
		arrow.style.transform = 'rotate(180deg)'
		arrow.style.padding = '3px 0px 0px'
	} else {
		arrow.style.transform = 'rotate(0deg)'
	}
}
// -- listeners
burgerBtn.addEventListener('click', openBurgerMenu)
burgerMenuProductBtn.addEventListener('click', () => burgerHandles(burgerMenuProductItems, burgerMenuCompanyItems, burgerMenuConnectItems, burgerArrow1))
burgerMenuCompanyBtn.addEventListener('click', () => burgerHandles(burgerMenuCompanyItems, burgerMenuProductItems, burgerMenuConnectItems, burgerArrow2))
burgerMenuConnectBtn.addEventListener('click', () => burgerHandles(burgerMenuConnectItems, burgerMenuCompanyItems, burgerMenuProductItems, burgerArrow3))
for (const items of burgerMenuItemsItem) {
	items.addEventListener('click', openBurgerMenu)
}
//========================================================================================
// DESKTOP MENU <==
//========================================================================================
// -- selectors
const header = document.querySelector('header')
const menuBtnProduct = document.querySelector('.nav__menu-items-column-item--product')
const menuBtnCompany = document.querySelector('.nav__menu-items-column-item--company')
const menuBtnConnect = document.querySelector('.nav__menu-items-column-item--connect')
const menuProductWindow = document.querySelector('.nav_menu-items-column-window--product')
const menuCompanyWindow = document.querySelector('.nav_menu-items-column-window--company')
const menuConnectWindow = document.querySelector('.nav_menu-items-column-window--connect')
const menuItemLinks = document.querySelectorAll('.nav__menu-items-column-window-link')
const menuProductArrow = document.querySelector('.nav__menu-items-column-item-arrow--product')
const menuCompanyArrow = document.querySelector('.nav__menu-items-column-item-arrow--company')
const menuConnectArrow = document.querySelector('.nav__menu-items-column-item-arrow--connect')
// -- arrays
const desktopMenuArrows = [menuProductArrow, menuCompanyArrow, menuConnectArrow]
// -- functions
const openDesktopMenu = (x, y, z, arrow) => {
	x.classList.toggle('nav__menu-items-column-window-active')
	y.classList.remove('nav__menu-items-column-window-active')
	z.classList.remove('nav__menu-items-column-window-active')
	if (x.classList.contains('nav__menu-items-column-window-active')) {
		desktopMenuArrows.forEach(item => (item.style.transform = 'rotate(0deg)'))
		arrow.style.transform = 'rotate(180deg)'
		arrow.style.padding = '3px 0px 0px'
	} else {
		arrow.style.transform = 'rotate(0deg)'
	}
}
const closeAllMenu = () => {
	menuProductWindow.classList.remove('nav__menu-items-column-window-active')
	menuCompanyWindow.classList.remove('nav__menu-items-column-window-active')
	menuConnectWindow.classList.remove('nav__menu-items-column-window-active')
	desktopMenuArrows.forEach(item => (item.style.transform = 'rotate(0deg)'))
}
// -- listeners
menuBtnProduct.addEventListener('click', () => openDesktopMenu(menuProductWindow, menuCompanyWindow, menuConnectWindow, menuProductArrow))
menuBtnCompany.addEventListener('click', () => openDesktopMenu(menuCompanyWindow, menuProductWindow, menuConnectWindow, menuCompanyArrow))
menuBtnConnect.addEventListener('click', () => openDesktopMenu(menuConnectWindow, menuCompanyWindow, menuProductWindow, menuConnectArrow))
header.addEventListener('click', closeAllMenu, {capture: true})
for (const items of menuItemLinks) {
	items.addEventListener('click', closeAllMenu)
}
