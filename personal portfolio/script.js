// JavaScript code for the portfolio website

// Add event listener to the "Hire me" button
const hireMeButton = document.getElementById('btn-top');
hireMeButton.addEventListener('click', hireMeButtonClick);

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

