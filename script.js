const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        navbar.classList.add('bg-blue-700')
    } else if (window.scrollY <= 600) {
        navbar.classList.remove('bg-blue-700')
    }
})