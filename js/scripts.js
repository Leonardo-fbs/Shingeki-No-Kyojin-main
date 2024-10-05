var menuOpened =  document.querySelector('.header__btn-menu')
var menuClosed =  document.querySelector('.header__btn-fechar')
var shortcut =  document.querySelector('.shortcut')

menuOpened.addEventListener('click', () => {
    shortcut.style.display = "none";
})

menuClosed.addEventListener('click', () => {
    shortcut.style.display = "block";
})
