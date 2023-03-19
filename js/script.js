const burgerBtn = document.querySelector('.navbar__burger-btn')
const burgerIcon = burgerBtn.querySelector('i')
const mobileMenu = document.querySelector('.navbar__mobile-links')

const openMenu = () => {
	console.log('działa')
	mobileMenu.classList.toggle('show')
	if (burgerIcon.classList.contains('fa-bars')) {
		burgerIcon.classList.remove('fa-bars')
		burgerIcon.classList.add('fa-xmark')
	} else {
		burgerIcon.classList.remove('fa-xmark')
		burgerIcon.classList.add('fa-bars')
	}
}

burgerBtn.addEventListener('click', openMenu)
