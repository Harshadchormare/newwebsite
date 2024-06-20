document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
    let currentIndex = 0;

    function scrollInstructors(direction) {
        const instructorContainer = document.querySelector('.instructor-container');
        const totalInstructors = document.querySelectorAll('.instructor-section').length;

        if (direction === 'left') {
            currentIndex = (currentIndex === 0) ? totalInstructors - 1 : currentIndex - 1;
        } else {
            currentIndex = (currentIndex === totalInstructors - 1) ? 0 : currentIndex + 1;
        }

        const newTransform = `translateX(-${currentIndex * 100}%)`;
        instructorContainer.style.transform = newTransform;

        // Toggle the visibility of the buttons
        leftButton.classList.toggle('disabled', currentIndex === 0);
        rightButton.classList.toggle('disabled', currentIndex === totalInstructors - 1);
    }

    leftButton.addEventListener('click', () => scrollInstructors('left'));
    rightButton.addEventListener('click', () => scrollInstructors('right'));

    // Initial button visibility
    leftButton.classList.add('disabled');
    if (document.querySelectorAll('.instructor-section').length <= 1) {
        rightButton.classList.add('disabled');
    }
});
