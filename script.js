// Grab the elements we need
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// 1. Switch navbar style once the user scrolls past 80px
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 2. Toggle the mobile menu when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 3. Close the mobile menu after a link is clicked
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});