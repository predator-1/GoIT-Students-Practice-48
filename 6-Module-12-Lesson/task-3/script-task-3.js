/**
 * Show hidden popup on blur
 */

const inputRef = document.querySelector('input');
const popupRef = document.querySelector('.js-popup');
const popupTextRef = document.querySelector('#js-popup-text');

inputRef.addEventListener('blur', function () {
  popupRef.classList.add('popup-open');
  popupTextRef.textContent = this.value;
  document.addEventListener('keydown', handlePopupClose);
});

function handlePopupClose(e) {
  if (e.code === 'Escape') {
    popupRef.classList.remove('popup-open');
    document.removeEventListener('keydown', handlePopupClose);
  }
}
