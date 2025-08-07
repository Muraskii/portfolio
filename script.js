/*
 * script.js
 *
 * Handles interactive behaviours for the portfolio site, including mobile
 * navigation toggling, scroll‑triggered animations, smooth scrolling
 * behaviour, and dynamic year rendering in the footer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuIcon = document.querySelector('.mobile-menu-icon');
  const navLinks = document.querySelector('#navbar .nav-links');
  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('#navbar .nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });

  // Intersection Observer to reveal sections on scroll
  const hiddenSections = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  hiddenSections.forEach(section => observer.observe(section));

  // Scroll down icon behaviour
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', () => {
      const firstSection = document.querySelector('main section');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Update copyright year automatically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});