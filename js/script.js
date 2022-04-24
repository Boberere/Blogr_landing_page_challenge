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

const burgerArrow1 = document.querySelector('.burger-arrow1')
const burgerArrow2 = document.querySelector('.burger-arrow2')
const burgerArrow3 = document.querySelector('.burger-arrow3')

const burgerArrow = [burgerArrow1, burgerArrow2, burgerArrow3]
const openMenu = () => {
	burgerBtnBurger.classList.toggle('disabled')
	burgerBtnClose.classList.toggle('blockActive')
	burgerMenu.classList.toggle('flexActive')
	const burgerMenuList = [burgerMenuList1, burgerMenuList2, burgerMenuList3]
	burgerMenuList.forEach(item => item.classList.remove('active'))
	if (burgerBtnBurger.classList.contains('disabled')) {
		burgerArrow.forEach(item => (item.style.transform = 'rotate(0deg)'))
	}
}
const burgerHandles = (x, y, z, arrow) => {
	x.classList.toggle('active')
	y.classList.remove('active')
	z.classList.remove('active')
	if (x.classList.contains('active')) {
		burgerArrow.forEach(item => (item.style.transform = 'rotate(0deg)'))
		arrow.style.transform = 'rotate(180deg)'
	} else {
		arrow.style.transform = 'rotate(0deg)'
	}
}
const burgerMenuListItems = [...burgerMenuListItems1, ...burgerMenuListItems2, ...burgerMenuListItems3]
for (const items of burgerMenuListItems) {
	items.addEventListener('click', openMenu)
}
burgerBtn.addEventListener('click', openMenu)
burgerMenuItem1.addEventListener('click', () =>
	burgerHandles(burgerMenuList1, burgerMenuList2, burgerMenuList3, burgerArrow1)
)
burgerMenuItem2.addEventListener('click', () =>
	burgerHandles(burgerMenuList2, burgerMenuList1, burgerMenuList3, burgerArrow2)
)
burgerMenuItem3.addEventListener('click', () =>
	burgerHandles(burgerMenuList3, burgerMenuList2, burgerMenuList1, burgerArrow3)
)
