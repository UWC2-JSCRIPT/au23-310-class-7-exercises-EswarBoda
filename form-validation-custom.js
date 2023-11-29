// TODO
const form = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const select = document.getElementById("contact-kind");
const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");

let validInput = false;

// check that user has entered minimum number of characters
const validateLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove('invalid');
        validInput = true;
    } else {
        input.parentElement.classList.add('invalid');
        validInput = false;
    }
}

// validate email
const validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(email.value.trim())) {
        email.parentElement.classList.remove('invalid');
        validInput = true;
    } else {
        email.parentElement.classList.add('invalid');
        validInput = false;
    }
}

const handleSelect = (selectEle) => {
    if (selectEle.value === 'business') {
        employees.parentElement.classList.remove('hidden');
        os.parentElement.classList.add('hidden');
    } else if (selectEle.value === 'technical') {
        employees.parentElement.classList.add('hidden');
        os.parentElement.classList.remove('hidden');
    }
};

select.addEventListener('change', () => handleSelect(select));

// submit event listener
form.addEventListener("submit", (e) => {
 
   validateLength(firstName, 3);
   validateLength(lastName, 3);
   validateEmail(email);

   // if not valid input, prevent default form submission behavior
   if (!validInput) {
    e.preventDefault();
    console.log('Bad input, verify all input entries');
   } else {
    // All input is valid
    alert('All input is valid, form submitted');
   }
});

