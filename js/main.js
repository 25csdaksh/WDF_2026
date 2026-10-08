/**
 * StudentHub - Reusable Layout & UI Components (Practical 3 Extension)
 * Handles reusable interactive components and responsive navigation enhancements.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Reusable Active Navigation Link Handler
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav.primary-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // 2. Reusable Card Hover Micro-interaction
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.2s ease, border-color 0.2s ease';
    });
  });

  // 3. Reusable Responsive Table Wrapper Check
  const tables = document.querySelectorAll('table.data-table');
  tables.forEach(table => {
    if (!table.parentElement.classList.contains('table-responsive')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-responsive';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });
});
