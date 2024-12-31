// Initialize EmailJS
(function () {
    emailjs.init("n2YUo98q4NYAyf7Ls");
})();

// Function to send email
function sendemail() {
    // Retrieve input values
    var from_name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

        // Validate input values
        if (!from_name || !email || !subject || !message) {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Information',
                text: 'Please fill out all the fields before sending.',
                confirmButtonText: 'OK'
            });
            return;
        }

    // Set up email template parameters
    var templateParams = {
        email: email, 
        from_name: from_name, 
        subject: subject, 
        message: message, 
    };

    // Send email using EmailJS
    emailjs.send('service_w519v9m', 'template_fjaknd7', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show a success alert with SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for connecting. I will get back to you soon!',
                confirmButtonText: 'OK',
                timer: 3000,
                timerProgressBar: true
            });

            // Clear the form inputs after success
            document.getElementById("contact-form").reset();

        }, function (error) {
            console.log('FAILED...', error);

            // Show an error alert with SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send your message. Please try again later.',
                confirmButtonText: 'Retry',
            });
        });
}
