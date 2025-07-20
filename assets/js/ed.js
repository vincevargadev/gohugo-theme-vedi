// 'Back to top' logic
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

function setupHamburgerMenuKeyboardToggle() {
  const sidebarToggleLabel = document.querySelector('label[for="sidebar-checkbox"]');
  const sidebarCheckbox = document.getElementById('sidebar-checkbox');

  if (sidebarToggleLabel && sidebarCheckbox) {
    sidebarToggleLabel.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        sidebarCheckbox.checked = !sidebarCheckbox.checked;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupBackToTop();
  setupHamburgerMenuKeyboardToggle();
});
