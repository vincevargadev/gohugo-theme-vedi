function setupBackToTop() {
  const intersectionObserver = new IntersectionObserver(function(entries) {
    const topBtn = document.querySelector('.top-of-site-link');
    if (topBtn === null) return;

    topBtn.dataset.visible = entries[0].boundingClientRect.y < 0;
  });

  const topAnchor = document.querySelector('#top-of-site-anchor');
  if (topAnchor !== null) {
    intersectionObserver.observe(topAnchor);
  }
}

function setupSidebarToggle() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebarCheckbox = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (!sidebarToggle || !sidebarCheckbox) return;

  // Make the label keyboard accessible
  sidebarToggle.setAttribute('tabindex', '0');
  sidebarToggle.setAttribute('role', 'button');
  
  sidebarToggle.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      sidebarCheckbox.checked = !sidebarCheckbox.checked;
    }
  });

  // Close sidebar when clicking outside
  // Use mousedown instead of click to avoid race conditions with the toggle
  document.addEventListener('mousedown', function(event) {
    if (!sidebarCheckbox.checked) return; // Sidebar is closed, nothing to do
    
    const clickedOnSidebar = sidebar && sidebar.contains(event.target);
    const clickedOnToggle = sidebarToggle.contains(event.target);
    
    if (!clickedOnSidebar && !clickedOnToggle) {
      sidebarCheckbox.checked = false;
    }
  });

  // Close sidebar with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidebarCheckbox.checked) {
      sidebarCheckbox.checked = false;
      sidebarToggle.focus(); // Return focus to toggle
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupBackToTop();
  setupSidebarToggle();
});
