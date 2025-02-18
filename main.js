const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    // Toggle active class on both menu button and navigation
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});