const burger = document.querySelector('.m-menu')
const menu = document.querySelector('.menu')
const menuElems = menu.querySelectorAll('.menu-item')

const toggleMenu = () => {
    menu.classList.toggle('menu-active')
    // burger.classList.toggle('humburger-menu-active')
}

const hideMenu = () => {
    menu.classList.remove('menu-active')
    //   burger.classList.remove('humburger-menu-active')
}

burger.addEventListener('click', toggleMenu)

for (elem of menuElems) {
    elem.addEventListener('click', hideMenu)
}