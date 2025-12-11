const form = document.querySelector('.contact-form');

// Error fields
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Validation runs when someone submits the forms.
form.addEventListener('submit', function(e) {
    let hasError = false;

    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Removes spaces in name, email and message to control better.
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Name empty
    if (!name) {
        nameError.textContent = "Name is required.";
        hasError = true;
    }

    // Email empty or invalid missing @ or a dot.
    if (!email) {
        emailError.textContent = "Email is required.";
        hasError = true;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Email must be valid.";
        hasError = true;
    }

    // Message too short
    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        hasError = true;
    }

    // Wont submit if there's a error
    if (hasError) {
        e.preventDefault();
    }
});
