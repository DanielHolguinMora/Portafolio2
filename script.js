// script.js


document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.innerHTML = navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Sticky navigation
  const nav = document.querySelector('.main-nav');
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > header.offsetHeight) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
  
  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
          item.classList.remove('fade-in');
        }
      });
    });
  });

  // Animate skill bars on scroll
function animateSkillBars(bar) {
    const level = bar.getAttribute('data-level');
    bar.style.width = level + '%'; // Añadir la unidad %
    bar.style.transition = 'width 1s ease-in-out'; // Añadir animación suave
}

// Intersection Observer for animations
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar cada barra de habilidad individualmente
            const skillLevel = entry.target.querySelector('.skill-level');
            if (skillLevel) {
                animateSkillBars(skillLevel);
            }
        }
    });
}, { threshold: 0.5 }); // Cambiado a 50% de visibilidad para mejor UX

// Observar cada contenedor de habilidad individualmente
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      // For demonstration, we'll just show an alert
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      this.reset();
    });
  }
  
  // Set current year in footer
  document.querySelector('.footer-bottom').innerHTML += ` &copy; ${new Date().getFullYear()}`;
});