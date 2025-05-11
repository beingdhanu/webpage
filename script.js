document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    
    // Change menu icon between hamburger and X
    const menuIcon = menuToggle.querySelector('i');
    if (mobileNav.classList.contains('active')) {
      menuIcon.setAttribute('data-lucide', 'x');
    } else {
      menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      const menuIcon = menuToggle.querySelector('i');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('messageForm');
  const toast = document.getElementById('toast');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get the submit button
      const submitBtn = document.getElementById('submitBtn');
      const originalBtnContent = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.innerHTML = `
        <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
        Sending...
      `;
      
      // Simulate form submission delay
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Restore button
        submitBtn.innerHTML = originalBtnContent;
        
        // Show toast notification
        toast.classList.add('show');
        
        // Hide toast after 3 seconds
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }, 1500);
    });
  }
  
  // Add scroll animation to elements
  const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .project-card, .education-card, .skill-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});