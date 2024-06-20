// Open the FAQ modal
document.getElementById('faqBtn').addEventListener('click', function() {
  document.getElementById('faqModal').style.display = 'block';
});

// Close the FAQ modal when close button is clicked
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('faqModal').style.display = 'none';
});

