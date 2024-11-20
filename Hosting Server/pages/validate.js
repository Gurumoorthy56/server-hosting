const validateEmail = (email) => {
    return email.match(
        /^[a-zA-Z_]+(\.[a-zA-Z]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,})+$/
        // /^[a-zA-Z]+\.[a-zA-Z]+@marlensoft\.com$/
    );
};

const mailinLocal = (email) => {
    return localStorage.getItem(email) !== null;
}

function getAllLocalStorageItems() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key at index i
        const value = localStorage.getItem(key); // Get the value associated with the key
        items[key] = value; // Store the key-value pair in an object
    }
    return items;
}



// const validatePassword = (password) => {
//     return password === '1234'; // Password must be exactly '1234'
// };

function validateLogin(email, password) {
    const storedPassword = localStorage.getItem(email);
    return storedPassword === password;
}




const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the icon based on the visibility state
    this.textContent = type === 'password'
        ? 'visibility'
        : 'visibility_off';
});

const validate = (event) => {
    const $result1 = $('#result1');
    const $result2 = $('#result2');
    const email = $('#email2').val();
    const password = $('#password').val();
    $result1.text('');
    $result2.text('');
    let isValid = true;

    if (!validateEmail(email)) {
        $result1.text('Email is invalid.');
        isValid = false;
    }
    else if (!mailinLocal(email)) {
        $result1.text('Email is not Registered.');
        isValid = false;
    }
    if (!validateLogin(email, password)) {
        $result2.text('Password is invalid.');
        isValid = false;
    }
    else {
        $result1.text('');
        $result2.text('');
    }
    if (!isValid) {
        event.preventDefault(); // Prevent form submission if any validation fails
    }
}

$('#login').on('submit', validate);

// console.log(getAllLocalStorageItems());



// Function to validate login
// function validateLogin(email, password) {
//     const storedPassword = localStorage.getItem(email);
//     return storedPassword === password;
// }


// const email = "g@gmail.com";
// const password = "g@123";

// Simple validation for demonstration purposes
// if (validateLogin(email, password)) {
//     alert('Login successful!');
//     // Redirect or perform other actions on successful login
// } else {
//     alert('Invalid email or password.');
// }


// Example: Pre-populating some credentials (for testing purposes)
// saveCredentials('test@example.com', '1234');
// saveCredentials('g@gmail.com', 'g@123');
// localStorage.clear();