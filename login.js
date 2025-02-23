let users = [];
let currentUserEmail = '';
let generatedOTP = '';

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const otpVerificationForm = document.getElementById('otp-verification-form');

    loginForm.classList.toggle('hidden');
    registrationForm.classList.toggle('hidden');
    forgotPasswordForm.classList.add('hidden'); // Hide forgot password form
    otpVerificationForm.classList.add('hidden'); // Hide OTP verification form
}

function showForgotPassword() {
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    loginForm.classList.add('hidden');
    forgotPasswordForm.classList.remove('hidden');
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;

    if (username && password && email) {
        // Check if the username already exists
        const existingUser  = users.find(user => user.username === username);
        if (existingUser ) {
            alert('Username already exists. Please choose another one.');
        } else {
            // Register the new user
            users.push({ username, password, email });
            alert('Registration successful! You can now log in.');
            toggleForms(); // Switch to login form
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful!');
            currentUserEmail = user.email;
            window.location.href = "homepage.html"; 
        } else {
            alert('Invalid username or password.');
        }
        } else {
            alert('Please enter both username and password.');
        }
        
    }