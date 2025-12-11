// valideringskontroll

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});