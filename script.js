document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const signupModal = document.getElementById('signupModal');
    const loginModal = document.getElementById('loginModal');
    const closeButtons = document.getElementsByClassName('close');

    // Newsletter form submission
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thanks for subscribing! We\'ll keep you updated.');
        this.reset();
    });

    // Notify Me button
    const notifyButton = document.querySelector('.notify-me');
    notifyButton.addEventListener('click', function() {
        openSignupModal(); // Open signup modal instead of just showing alert
    });

    // Login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        // Add your login logic here
        alert('Login functionality will be implemented with backend integration');
        this.reset();
        loginModal.style.display = "none";
    });

    // Signup form submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        // Add your signup logic here
        alert('Signup functionality will be implemented with backend integration');
        this.reset();
        signupModal.style.display = "none";
    });

    // Close modal when clicking on X
    Array.from(closeButtons).forEach(button => {
        button.addEventListener('click', function() {
            signupModal.style.display = "none";
            loginModal.style.display = "none";
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    });
});

// Modal open functions
function openSignupModal() {
    document.getElementById('signupModal').style.display = "block";
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = "block";
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 