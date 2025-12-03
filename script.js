const openBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close-modal');

// open modal
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// close on close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// close on click outside modal-content
modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal-content')) {
    modal.style.display = 'none';
  }
});
