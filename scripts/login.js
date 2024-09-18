// variable to hold the value of inputs
const loginForm = document.querySelector('#login-form')

// Handle login submit event
loginForm.addEventListener('submit', function(event) {
    // prevent event defualt behaviour of restarting
    event.preventDefault();
    // collect login form data
    const formData = new FormData(loginForm);
    console.log(
        formData.get('username'),
        formData.get('password'),
    );

    // display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Logged in Successfully'
}) 