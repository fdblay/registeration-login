// Select form by name
// const registerForm = document.getElementById('register-form');

const registerForm = document.querySelector('#register-form');


// document.body.innerHTML = '<h1>I want to write an heading1 on the screen, it overides the form';

// Handle form submit event
registerForm.onsubmit = function() {
    // collect username
    // collect email
    // collect password
    // save user information
    // send confirmation email
}

// Handle form submit event
registerForm.addEventListener('submit', function(event) {
    // prevent event default behaviour
    event.preventDefault();
    // collect form data
    const formData = new FormData(registerForm);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // save user information
    // send confirmation email
    // Display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account Registered Successfully!';
})

// age variable
const age = 44;
// square
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}


// function to get full name
function fullName (firstName, lastName) {
    // return (firstName + ' ' + lastName);
    return `${firstName} ${lastName}`;
}


