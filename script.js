const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-color')
    } else if (window.scrollY <= 100) {
        navbar.classList.remove('bg-color')
    }
})

