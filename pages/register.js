var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

const validateEmail = (email) => {
    return email.match(
        /^[a-zA-Z]+(_[a-zA-Z]+)*(\.[a-zA-Z]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,})+$/
        // /^[a-zA-Z]+\.[a-zA-Z]+@marlensoft\.com$/
    )
}

const validatePassword = (password) => {
    return password.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.* ).{8,}$/
    )
}

const validatePassMatch = (password, confirmpass) => {
    return password === (confirmpass);
}

const validateFName = (fname) => {
    return fname.match(/^[a-zA-Z]{4,}$/)
}

const validateLName = (lname) => {
    return lname.match(/^[a-zA-Z]{1,}$/)
}

const validateNumber = (tele) => {
    return tele.match(/^[0-9]{10,}$/);
}

const validateStreet = (textContent) => {
    return textContent.match(/^[\w_\.\s\,]{5,}$/);
}

const validatePostal = (postal) => {
    return postal.match(/^[0-9]{4,}$/);
}

function saveCredentials(email, password) {
    localStorage.setItem(email, password);
}

document.getElementById('submit-button').disabled = true;


const validate = (event) => {
    const emailresult = $('#emailresult');
    const passwordStrength = $('#password-strength');
    const passwordMatch = $('#password-match');
    const fnresult = $('#fnresult');
    const lnresult = $('#lnresult');
    const teleresult = $('#teleresult');
    const streetresult = $('#streetresult');
    const pcoderesult = $('#pcoderesult');
    const cityresult = $('#cityresult');
    const emailinresult = $('#emailinresult');

    const email = $('#email').val();
    const password = $('#new-password').val();
    const confirmpass = $('#confirm-password').val();
    const fname = $('#first-name').val();
    const lname = $('#last-name').val();
    const tele = $("#tele").val();
    const street = $('#street').val();
    const pcode = $('#postal').val();
    const city = $('#city').val();
    const emailinvoice = $("#email-invoice").val();

    emailresult.text('');
    passwordStrength.text('');
    passwordMatch.text('');
    fnresult.text('');
    lnresult.text('');
    teleresult.text('');
    streetresult.text('');
    pcoderesult.text('');
    cityresult.text('');
    emailinresult.text('');

    let isValid = true;



    document.getElementById('submit-button').disabled = true;

    if (!validateEmail(emailinvoice)) {
        emailinresult.text('Email is invalid');
        isValid = false;
    }

    if (!validateEmail(email)) {
        emailresult.text('Email is invalid.');
        isValid = false;
    }

    if (!validatePassword(password)) {
        passwordStrength.text('Password is Weak.');
        isValid = false;
    }

    if (!validatePassMatch(password, confirmpass)) {
        passwordMatch.text("Password doesn't match");
        isValid = false;
    }

    if (!validateFName(fname)) {
        fnresult.text("Invalid first name");
        isValid = false;
    }

    if (!validateLName(lname)) {
        lnresult.text("Invalid Last name");
        isValid = false;
    }
    if (!validateNumber(tele)) {
        teleresult.text("Number is required");
        isValid = false;
    }

    if (!validateStreet(street)) {
        streetresult.text("Invalid street name");
        isValid = false;
    }

    if (!validatePostal(pcode)) {
        pcoderesult.text("Enter postal code");
        isValid = false;
    }

    if (!validateFName(city)) {
        cityresult.text("Enter city name");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }

    else {
        saveCredentials(email, password);
    }
}
//Calling function on Submit
$('#Register2').on('submit', validate);

//Using restcountries Api for listing countries
const countrySelect = document.getElementById('country');
const telCodeInput = document.getElementById('tel-code');
const mobCodeInput = document.getElementById('mob-code');
const langSelect = document.getElementById('language');
let countryList = async () => {
    try {
        let res = await fetch("https://restcountries.com/v2/all");
        let data = await res.json();
        for (let i = 0; i < data.length; i++) {
            // countryCode.push(data[i].callingCodes);
            console.log(data[i].alpha2Code);
            const option = document.createElement('option');
            option.value = data[i].name;
            option.textContent = data[i].name;
            option.dataset.callingCode = '+' + (data[i].callingCodes || '');
            option.dataset.langcount = data[i].languages.length;
            for (let j = 0; j < data[i].languages.length; j++)
                option.dataset[`lang-${j + 1}`] = (data[i].languages[j].name || '');
            // console.log(data[i].languages[j].name)
            countrySelect.appendChild(option);
        }
    }
    catch (e) {
        console.log("error: ", e);
    }

}

countryList();
//changing country code and language with respect to selected country
countrySelect.addEventListener('change', () => {
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    telCodeInput.value = selectedOption.dataset.callingCode || '+44';
    mobCodeInput.value = selectedOption.dataset.callingCode || '+44';

    langSelect.innerHTML = '';
    for (let i = 0; i < selectedOption.dataset.langcount; i++) {
        const option = document.createElement('option');
        option.value = selectedOption.dataset[`lang-${i + 1}`];
        option.textContent = selectedOption.dataset[`lang-${i + 1}`];
        langSelect.appendChild(option);
    }

});

// adding email for email-invoice
$('#same-email').on('click', function () {
    const emailin = document.getElementById('email-invoice');
    const emailinresult = $('#emailinresult');
    emailinresult.text('');
    if (document.getElementById("same-email").checked) {
        const email = $('#email').val();
        if (!validateEmail(email)) {
            emailinresult.text('Email above is invalid');
            document.getElementById("same-email").checked = false;

        }
        else emailin.value = email;

    }
    else
        emailin.value = '';
});

// disabling the submit button
document.getElementById('agree').addEventListener('click', function () {
    const isChecked = this.checked;
    document.getElementById('submit-button').disabled = !isChecked;
    // isValid = false;
});

document.getElementById('submit-button').addEventListener('click', function () {
    const isChecked = this.checked;
    document.getElementById('agree').checked = isChecked;
    // isValid = false;
});

//adding password type toggle
const togglePassword1 = document.querySelector('#togglePassword-1');
const passwordInput1 = document.querySelector('#new-password');

const togglePassword2 = document.querySelector('#togglePassword-2');
const passwordInput2 = document.querySelector('#confirm-password');

togglePassword1.addEventListener('click', function () {
    const type = passwordInput1.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput1.setAttribute('type', type);
    this.textContent = type === 'password'
        ? 'visibility'
        : 'visibility_off';
});

togglePassword2.addEventListener('click', function () {
    const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput2.setAttribute('type', type);
    this.textContent = type === 'password'
        ? 'visibility'
        : 'visibility_off';
});

//displaying that country code cannot be changed
var popover = new bootstrap.Popover(document.getElementById('pop-code'));

$("#tel-code").click(() => {
    popover.show();
});

$("#tel-code").mouseleave(() => {
    popover.hide();
});
