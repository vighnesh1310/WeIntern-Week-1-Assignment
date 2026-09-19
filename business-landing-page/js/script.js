/* ===================================================
   NEXORA Technologies - Business Landing Page JavaScript
   Sangli, Maharashtra | Beginner-Friendly Logic
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Mobile Hamburger Menu Toggle
    // ----------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on any link
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

    // ----------------------------------------------------
    // 2. Contact Form Validation & Submission Handling
    // ----------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent standard page reload

            // Get form input values
            const nameInput = document.getElementById('fullName');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const phoneError = document.getElementById('phoneError');
            const messageError = document.getElementById('messageError');

            // Reset previous error messages
            nameError.textContent = '';
            emailError.textContent = '';
            phoneError.textContent = '';
            messageError.textContent = '';
            formAlert.className = 'form-alert';
            formAlert.textContent = '';

            let isValid = true;

            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your full name.';
                nameInput.classList.add('input-error');
                isValid = false;
            } else if (nameInput.value.trim().length < 3) {
                nameError.textContent = 'Name must be at least 3 characters.';
                nameInput.classList.add('input-error');
                isValid = false;
            } else {
                nameInput.classList.remove('input-error');
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter your email address.';
                emailInput.classList.add('input-error');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.classList.add('input-error');
                isValid = false;
            } else {
                emailInput.classList.remove('input-error');
            }

            // Validate Phone Number (Indian 10-digit format or international)
            const phonePattern = /^[0-9+\-\s()]{7,15}$/;
            if (!phoneInput.value.trim()) {
                phoneError.textContent = 'Please enter your contact phone number.';
                phoneInput.classList.add('input-error');
                isValid = false;
            } else if (!phonePattern.test(phoneInput.value.trim())) {
                phoneError.textContent = 'Please enter a valid phone number.';
                phoneInput.classList.add('input-error');
                isValid = false;
            } else {
                phoneInput.classList.remove('input-error');
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter your project message.';
                messageInput.classList.add('input-error');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message should be at least 10 characters long.';
                messageInput.classList.add('input-error');
                isValid = false;
            } else {
                messageInput.classList.remove('input-error');
            }

            // If all fields are valid, show success message
            if (isValid) {
                formAlert.className = 'form-alert success';
                formAlert.innerHTML = `
                    <i class="fa-solid fa-circle-check"></i> Thank you, <strong>${nameInput.value.trim()}</strong>! Your message has been sent successfully to NEXORA Technologies team in Sangli. We will contact you shortly.
                `;

                // Reset the form fields
                contactForm.reset();

                // Scroll smoothly to the alert
                formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    console.log('NEXORA Technologies landing page initialized.');
});
