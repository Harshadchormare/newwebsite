document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('blinkingText');
    const lines = [
        "Trusted by 5 million+ users online",
        "140+ courses on upskilling",
        "4.7 rating on courses",
        "Global presence in more than 150 countries",
        "Team of expert instructors, specialists in their field, committed to delivering education of the highest quality"
    ];

    let index = 0;

    function showNextText() {
        text.textContent = lines[index];
        index = (index + 1) % lines.length;
    }

    showNextText(); // Show the first text immediately

    const interval = setInterval(showNextText, 2000); // Change text every 5 seconds
});
