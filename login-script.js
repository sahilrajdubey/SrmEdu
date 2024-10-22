document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    // Hardcoded credentials (for demonstration purposes)
    const validEmail = 'admin@example.com';
    const validPassword = 'password123'; // Change these as needed

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        if (emailInput === validEmail && passwordInput === validPassword) {
            // Redirect to the admin portal
            window.location.href = 'adportal.html'; // Change to your portal URL
        } else {
            loginMessage.textContent = 'Invalid email or password. Please try again.';
        }
    });
});