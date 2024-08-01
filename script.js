document.addEventListener('DOMContentLoaded', function() {
    // Form validation for Sign In
    const signInForm = document.getElementById('sign-in-form');
    signInForm.addEventListener('submit', function(event) {
        const username = document.getElementById('sign-in-user').value;
        const password = document.getElementById('sign-in-pass').value;

        if (!username || !password) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });

    // Form validation for Sign Up
    const signUpForm = document.getElementById('sign-up-form');
    signUpForm.addEventListener('submit', function(event) {
        const username = document.getElementById('sign-up-user').value;
        const password = document.getElementById('sign-up-pass').value;
        const repeatPassword = document.getElementById('sign-up-repeat-pass').value;
        const email = document.getElementById('sign-up-email').value;

        if (!username || !password || !repeatPassword || !email) {
            alert('Please fill out all fields.');
            event.preventDefault();
        } else if (password !== repeatPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
