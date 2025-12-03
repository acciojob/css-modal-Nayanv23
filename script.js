document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close-modal');

  // Open modal - sets display: block for Cypress test
  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close on close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close on click outside modal-content (CYPRESS FIX)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {  // Only exact overlay closes modal
      modal.style.display = 'none';
    }
  });
});
