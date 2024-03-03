const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.body
const menuLinks = menu.querySelectorAll('.nav__link')
const closeMenu = () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock')
}
const openMenu = () => {
    burger.classList.add('active');
    menu.classList.add('active');
    body.classList.add('lock')
}
burger.addEventListener('click', (e) => {
    burger.classList.contains('active') ? closeMenu() : openMenu();
})

menu.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        return closeMenu()
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = link.getAttribute('href').substr(1)
        const scrollPosition = document.getElementById(blockID).getBoundingClientRect().top  + window.pageYOffset - 100
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })

        return closeMenu()
    })
})

