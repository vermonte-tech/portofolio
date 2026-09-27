/**
 * Vermonte Portfolio — Interactive Client-Side Script
 * Handles portfolio category filtering, smooth navigation, and inquiry form interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilter();
  initSmoothScroll();
  initMobileNav();
  initNavbarScroll();
});

/**
 * Mobile Navigation Toggle with Hamburger-to-X animation
 */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isActive = navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * Navbar elevation change on scroll
 */
function initNavbarScroll() {
  const navPill = document.querySelector('.navbar-pill');
  if (!navPill) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navPill.classList.add('is-scrolled');
    } else {
      navPill.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Filter portfolio items by category
 */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active state
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Handle smooth scrolling for anchor links with navbar offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Handle form submission on the client side
 */
function handleInquirySubmit() {
  const emailInput = document.getElementById('emailInput');
  const serviceSelect = document.getElementById('serviceSelect');

  if (emailInput && serviceSelect) {
    const email = emailInput.value;
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;

    // Provide friendly instant visual feedback
    alert(`Thank you! We received your inquiry for "${service}" from ${email}. We will reply within two working days.`);
    
    // Reset form
    document.getElementById('inquiryForm').reset();
  }
}
