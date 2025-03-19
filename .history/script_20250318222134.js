document.addEventListener('DOMContentLoaded', function() {
  // Background animation
  function animateBackground() {
    const circles = document.querySelectorAll('.blur-circle');

    circles.forEach((circle, index) => {
      // Add slight random movement
      const randomX = (Math.random() - 0.5) * 5;
      const randomY = (Math.random() - 0.5) * 5;

      circle.style.transform = `translate(${randomX}px, ${randomY}px) scale(${1 + Math.random() * 0.05})`;

      // Reset after animation
      setTimeout(() => {
        circle.style.transform = '';
      }, 500);
    });
  }

  // Run background animation every 3 seconds
  setInterval(animateBackground, 3000);

  // Parallax effect on mouse move
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const circles = document.querySelectorAll('.blur-circle');
    circles.forEach((circle, index) => {
      const depth = (index + 1) * 10;
      const moveX = (mouseX - 0.5) * depth;
      const moveY = (mouseY - 0.5) * depth;

      circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .download-card, .contact-card');

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('animate-in');
      }
    });
  }

  // Add animation class to CSS
  const style = document.createElement('style');
  style.textContent = `
    .feature-card, .download-card, .contact-card {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Initial check and scroll event
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
