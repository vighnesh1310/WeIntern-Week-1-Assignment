/* ===================================================
   NexGen Digital - Business Landing Page JavaScript
   Beginner-friendly, clean & well-commented code
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        // Toggle mobile menu open/close on hamburger click
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            
            // Change hamburger icon between bars and close icon (times)
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when any nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    console.log('NexGen Digital scripts initialized successfully.');
});
