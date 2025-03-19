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

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header logo click to scroll to top
  const headerLogo = document.querySelector('.header-content .logo');
  headerLogo.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    lastScrollTop = scrollTop;
  });

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Activate the first FAQ item by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
  }

  // Animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .faq-card, .overview-card, .contact-card, .overview-feature');

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
    .feature-card, .faq-card, .overview-card, .contact-card, .overview-feature {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .overview-feature {
      transition-delay: calc(var(--index, 0) * 0.1s);
    }
  `;
  document.head.appendChild(style);

  // Set transition delay for overview features
  const overviewFeatures = document.querySelectorAll('.overview-feature');
  overviewFeatures.forEach((feature, index) => {
    feature.style.setProperty('--index', index);
  });

  // Initial check and scroll event
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Footer logo animation and scroll to top functionality
  const footerLogo = document.querySelector('.footer-logo');

  // Function to check if user has scrolled to bottom of page
  function isScrolledToBottom() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Consider "bottom" when user is within 50px of the bottom
    return (windowHeight + scrollTop) >= (documentHeight - 50);
  }

  // Check scroll position and animate logo if at bottom
  window.addEventListener('scroll', function() {
    if (isScrolledToBottom()) {
      footerLogo.classList.add('animate');
      // Check if we're at the bottom immediately after page load
      console.log("At bottom, adding animate class");
    } else {
      footerLogo.classList.remove('animate');
    }
  });

  // Check if we're at the bottom immediately after page load
  if (isScrolledToBottom()) {
    footerLogo.classList.add('animate');
    console.log("Initial check: at bottom");
  }

  // Scroll to top when clicking on footer logo
  footerLogo.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
