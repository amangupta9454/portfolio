const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('#nav-links a');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Aspiring Software Engineer.'],
    typeSpeed: 40,
    backSpeed: 26,
    loop: true
  });