// script.js content inline for simplicity; in production, separate into script.js
        const sections = document.querySelectorAll('section');
        const timelineItems = document.querySelectorAll('.timeline-item');

        const observerOptions = {
            threshold: 0.1
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => sectionObserver.observe(section));

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => timelineObserver.observe(item));

        // Form submission placeholder
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado!');
        });
