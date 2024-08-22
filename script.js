const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-blue-700');
  } else if (window.scrollY <= 100) {
    navbar.classList.remove('bg-blue-700');
  }
});
