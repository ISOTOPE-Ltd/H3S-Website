document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name && email && message) {
            document.getElementById('formResponse').innerHTML = `<p>Thank you, ${name}. We have received your message.</p>`;
            this.reset();
        } else {
            document.getElementById('formResponse').innerHTML = `<p style='color:red;'>Please fill in all fields.</p>`;
        }
    });
});
