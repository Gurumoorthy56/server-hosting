var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
window.onload = setMinDate;
function setMinDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    // Format: YYYY-MM-DD
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    document.getElementById('server-date').setAttribute('min', formattedDate);
}

function hexToRgb(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function luminance(rgb) {
    const [r, g, b] = rgb.map(c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function validateColors(primaryColor, secondaryColor) {
    //Hex to rgb
    const primaryRgb = hexToRgb(primaryColor);
    const secondaryRgb = hexToRgb(secondaryColor);
    //calc luminance
    const primaryLuminance = luminance(primaryRgb);
    const secondaryLuminance = luminance(secondaryRgb);
    console.log(primaryLuminance);
    console.log(secondaryLuminance)
    if (primaryLuminance > secondaryLuminance)
        return false
    else
        return true
}

const validateFile = (file) => {
    const maxSize = 500 * 1024;
    if (file.size > maxSize)
        return false;
    else
        return true;
}


const validateEmail = (email) => {
    return email.match(
        /^[a-zA-Z]+[0-9]*(_[a-zA-Z0-9]+)*(\.[a-zA-Z]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,})+$/
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
    const colorResult = $('#color-result');
    const fileResult = $('#file-result');

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
    const primaryColor = $('#server-color-primary').val();
    const secondaryColor = $('#server-color-secondary').val();
    const file = document.getElementById("company-logo").files[0];


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
    colorResult.text('');
    fileResult.text('');
    document.getElementById('submit-button').disabled = true;

    let isValid = true;

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

    if (!validateColors(primaryColor, secondaryColor)) {
        colorResult.text('Primary color can be darker than Secondary color');
        isValid = false;
    }

    if (file) {
        if (!validateFile(file)) {
            fileResult.text('File size should be less than 500KB');
            isValid = false
        }
    }
    else {
        fileResult.text('No File Selected');
        isValid = false
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
        // console.log(res.body);
        let data = await res.json();
        for (let i = 0; i < data.length; i++) {
            // countryCode.push(data[i].callingCodes);
            // console.log(data[i].alpha2Code);
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
        else {
            emailin.value = email;
            emailin.setAttribute('disabled', 'true');
            $('#email').keyup(function () {
                const email = $('#email').val();
                emailin.value = email;
            })
        }
    }
    else { emailin.value = ''; emailin.removeAttribute('disabled'); }
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


const items = [
    "Active Directory Domain Controller",
    "AI/ML Model Serving Node",
    "Analytics Server",
    "Application Server",
    "Backup Server",
    "Big Data Processing Node",
    "Cloud Server",
    "Containerized Server",
    "Content Management System (CMS) Hosting",
    "Database Server",
    "Dedicated Server",
    "Dynamic Content Delivery Network (CDN)",
    "Edge Computing Node",
    "File Server",
    "Firewall Server",
    "FTP Server",
    "Game Server",
    "IoT Gateway Server",
    "Kubernetes Node",
    "Load Balancer",
    "LDAP Server",
    "Media Server",
    "Message Queue Server",
    "Microservices Server",
    "Monitoring Server",
    "NoSQL Database Server",
    "Production Server",
    "Proxy Server",
    "Remote Desktop Server",
    "SFTP Server",
    "Search Engine Server",
    "Security Server",
    "Shared Hosting Server",
    "SSH Server",
    "Static Content Delivery Network (CDN)",
    "Test Server",
    "Virtual Server",
    "VPN Server",
    "WebSocket Server",
    "Web Server"
];

let selectedItems = [];
let currentFocus = -1; // Track the currently focused item

document.getElementById("server-type").addEventListener("input", function () {
    const input = this.value.toLowerCase();

    closeAllLists();



    const listContainer = document.getElementById("autocomplete-list");

    listContainer.style.display = 'block';// Show the dropdown
    if (!input) { listContainer.style.display = 'none'; return };
    let count = 0;

    items.forEach((item) => {
        if (item.toLowerCase().includes(input) && !selectedItems.includes(item)) {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = item;

            // Add click event to select item
            itemDiv.addEventListener("click", function () {
                addItem(item);
            });

            // Add keyboard event for Enter key
            itemDiv.addEventListener("keydown", function (e) {
                if (e.key === 'Enter') {
                    addItem(item);
                }
            });

            listContainer.appendChild(itemDiv);
            count++;
        }
    });

    // Show scrollbar if there are more than 5 items
    if (count > 5) {
        listContainer.classList.add('scroll-div');
    } else {
        listContainer.classList.remove('scroll-div');
    }
});

// Keyboard navigation
document.getElementById("server-type").addEventListener("keydown", function (e) {
    const itemsList = document.getElementById("autocomplete-list").getElementsByTagName("div");

    if (e.key === 'ArrowDown') {
        currentFocus++;
        addActive(itemsList);
        e.preventDefault(); // Prevent default scrolling behavior
        scrollIntoView(itemsList[currentFocus]); // Scroll into view
    } else if (e.key === 'ArrowUp') {
        currentFocus--;
        addActive(itemsList);
        e.preventDefault(); // Prevent default scrolling behavior
        scrollIntoView(itemsList[currentFocus]); // Scroll into view
    } else if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission or other default actions
        if (currentFocus > -1 && itemsList[currentFocus]) {
            addItem(itemsList[currentFocus].innerText);
            const listContainer = document.getElementById("autocomplete-list");
            listContainer.style.display = 'none'; // Hide dropdown after selection
        }
    }
});

function addActive(itemsList) {
    if (!itemsList.length) return;

    removeActive(itemsList);

    if (currentFocus >= itemsList.length) currentFocus = 0; // Loop to first item
    if (currentFocus < 0) currentFocus = itemsList.length - 1; // Loop to last item

    itemsList[currentFocus].classList.add("autocomplete-active");
}

function removeActive(itemsList) {
    for (let i = 0; i < itemsList.length; i++) {
        itemsList[i].classList.remove("autocomplete-active");
    }
}

function addItem(item) {
    if (!selectedItems.includes(item)) {
        selectedItems.push(item);
        updateSelectedItems();
        document.getElementById("server-type").value = '';
        closeAllLists();
        currentFocus = -1; // Reset focus after selection
    }
}

function updateSelectedItems() {
    const selectedContainer = document.getElementById("selected-items");

    // Clear previous tags
    selectedContainer.innerHTML = '';

    selectedItems.forEach(item => {
        const tag = document.createElement("span");
        tag.className = 'tag';
        tag.textContent = item;

        const removeBtn = document.createElement("span");
        removeBtn.className = 'remove-tag';
        removeBtn.textContent = '✖';
        removeBtn.onclick = function () { removeItem(item); };

        tag.appendChild(removeBtn);
        selectedContainer.appendChild(tag);
    });
}

function removeItem(item) {
    selectedItems = selectedItems.filter(i => i !== item);
    updateSelectedItems();
}

function closeAllLists() {
    document.getElementById("autocomplete-list").innerHTML = '';
}

// Scrolls the focused item into view
function scrollIntoView(element) {
    if (!element) return;

    const listContainer = document.getElementById("autocomplete-list");
    const containerHeight = listContainer.clientHeight;
    const elementTop = element.offsetTop;
    const elementHeight = element.clientHeight;

    // Check if the element is out of view and scroll accordingly
    if (elementTop < listContainer.scrollTop) {
        listContainer.scrollTop = elementTop; // Scroll up to the focused element
    } else if (elementTop + elementHeight > listContainer.scrollTop + containerHeight) {
        listContainer.scrollTop = elementTop + elementHeight - containerHeight; // Scroll down to keep it in view
    }
}

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (e) {
    if (!e.target.matches('#server-type')) {
        closeAllLists();
        const listContainer = document.getElementById("autocomplete-list");
        listContainer.style.display = 'none'; // Hide dropdown when clicking outside
    }
});

//color input tag


