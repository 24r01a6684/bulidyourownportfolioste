// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
