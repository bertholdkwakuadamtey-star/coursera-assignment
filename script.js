  // Small client-side behavior for the contact form and footer year
        document.getElementById('year').textContent = new Date().getFullYear();

        const form = document.getElementById('contact-form');
        const status = document.getElementById('form-status');

        form.addEventListener('submit', function(e){
            e.preventDefault();
            status.textContent = '';
            // Basic HTML5 validation
            if (!form.checkValidity()) {
                status.textContent = 'Please complete all required fields.';
                return;
            }

            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate sending (replace with real API endpoint)
            setTimeout(() => {
                status.textContent = 'Message sent! Thanks — I will reply soon.';
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 900);
        });