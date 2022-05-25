/**
 * Crete page with images in modal window
 * User can change image with button <- and ->
 */

const images = document.querySelectorAll('.promo-image');
const modal = document.getElementById('modal-window');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');
const arrayImage = [];

images.forEach(el => {
  el.addEventListener('click', function (e) {
    modal.style.display = 'block';
    // modalContent.src = this.getAttribute('data-source');
    modalContent.src = this.dataset.source;
  });

  arrayImage.push(el.dataset.source);
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('keydown', e => {
  let newIndex;
  const currentIndex = arrayImage.indexOf(modalContent.src);
  if (e.key === 'ArrowLeft') {
    newIndex = leftClick(currentIndex);
  } else if (e.key === 'ArrowRight') {
    newIndex = rightClick(currentIndex);
  }
  modalContent.src = arrayImage[newIndex];
});

function leftClick(currentIndex) {
  let newIndex = currentIndex - 1;
  if (newIndex === -1) {
    newIndex = arrayImage.length - 1;
  }
  return newIndex;
}

function rightClick(currentIndex) {
  let newIndex = currentIndex + 1;
  if (newIndex === arrayImage.length) {
    newIndex = 0;
  }
  return newIndex;
}
