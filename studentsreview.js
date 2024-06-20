document.addEventListener('DOMContentLoaded', function () {
    var testimonials = document.querySelectorAll('.testimonial');
    var index = 0;

    function showNextTestimonial() {
        testimonials.forEach(function(testimonial) {
            testimonial.style.display = 'none';
        });
        testimonials[index].style.display = 'block';
        index = (index + 1) % testimonials.length;
    }

    // Show the first testimonial initially
    showNextTestimonial();

    // Auto-scroll testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);
});

