// TODO
const form = document.getElementById("contact-form");
// Name field
const fullName = document.getElementById("name");
fullName.attributes.required = true;

// email field
const email = document.getElementById("email");
email.attributes.required = true;

const reason = document.getElementById("reason");
const jobTitle = document.getElementById("job-title");
const companyWebsite = document.getElementById("company-website");
const codingLanguage = document.getElementById("coding-language");

// Message field
const message = document.getElementById("message");
message.attributes.required = true;

let validInput = false;

// check that user has entered minimum number of characters
const validateLength = (fullName, min) => {
    if (fullName.value.trim().length >= min) {
        fullName.parentElement.classList.remove('invalid');
        validInput = true;
    } else {
        fullName.parentElement.classList.add('invalid');
        validInput = false;
    }
}

// validate email
const validateRegEx = (regex, urlRegex = false) => {
    let re = /\w+@\w+\.\w+/; // use email regex by default
    
    if (urlRegex) { // if urlRegex flag is true, use urlRegex
        re = /https?\:\/\/.+\..+/; // url regex
    }

    if (re.test(regex.value.trim())) {
        regex.parentElement.classList.remove('invalid');
        validInput = true;
    } else {
        regex.parentElement.classList.add('invalid');
        validInput = false;
    }
}

// show & hide Reason for contacting options based on reason selection
const handleReasonForContacting = (reason) => {
    if (reason.value === 'job') {
        jobTitle.parentElement.classList.remove('hidden');
        companyWebsite.parentElement.classList.remove('hidden');
        codingLanguage.parentElement.classList.add('hidden');
    } else if (reason.value === 'code') {
        jobTitle.parentElement.classList.add('hidden');
        companyWebsite.parentElement.classList.add('hidden');
        codingLanguage.parentElement.classList.remove('hidden');
    }
};

let codingLanguageSelected = false;

const handleCodingLanguage = (codingLanguage) => {
    if (codingLanguage.value === 'HTML' ||
        codingLanguage.value === 'CSS' ||
        codingLanguage.value === 'JavaScript') {

            codingLanguageSelected = true;
            validInput = true;
    } else {
        validInput = false;
    }
    
};

// Handle reason for contact event
reason.addEventListener('change', () => handleReasonForContacting(reason));

// Handle coding language selection event
codingLanguage.addEventListener('change', () => handleCodingLanguage(codingLanguage));

// submit event listener
form.addEventListener("submit", (e) => {

    validateLength(fullName, 3); // validate name length
    validateRegEx(email, true); // validate email regex

    if ((reason.value === 'job')) {
        console.log('inside job check');
        validateLength(jobTitle, 3); // validate job title field
        validateRegEx(companyWebsite, true); // validate company website using URL regex
    }

    if ((reason.value === 'code') && (!codingLanguageSelected)) {
        console.log('A coding language must be selected when Talk code option is selected');
    }
    
    validateLength(message, 10); // validate textarea length

   // if not valid input, prevent default form submission behavior
   if (!validInput) {
    e.preventDefault();
    console.log('Bad input, verify all input entries');
   } else {
    // All input is valid
    alert('All input is valid, form submitted');
   }
});
