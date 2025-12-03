document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close-modal');

  // Open modal
  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close on close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close on click outside modal-content
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-content')) {
      modal.style.display = 'none';
    }
  });
});
