function closeForm() {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'none';
        document.getElementById('contact-us-form').style.display = 'block';
        document.getElementById('form-title').style.display = 'block';
        document.getElementById('contact-us-form').reset();
    }

    function handleSubmit(event) {
        event.preventDefault();
        document.getElementById('contact-us-form').style.display = 'none';
        document.getElementById('form-title').style.display = 'none';
        document.getElementById('thank-you-message').style.display = 'block';
    }

    function openForm() {
        document.getElementById('contactForm').style.display = 'block';
        document.getElementById('contact-us-form').style.display = 'block';
        document.getElementById('form-title').style.display = 'block';
        document.getElementById('thank-you-message').style.display = 'none';
    }

