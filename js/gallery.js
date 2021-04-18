import galleryItems from './gallery-items.js';
const imageGalleryList = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.lightbox.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
const modalCloseBtn = document.querySelector('.lightbox__button');
const markUpGallery = galleryImg(galleryItems);
imageGalleryList.insertAdjacentHTML('beforeend', markUpGallery);
imageGalleryList.addEventListener('click', clickListImg);
modalCloseBtn.addEventListener('click', funkClosedModal)
modalImg.addEventListener('click', funkClosedModal)
function galleryImg(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
    `
    })
    .join('');
}

function clickListImg(evt) {
evt.preventDefault()
  modalImg.src = evt.target.dataset.source;
  modalWindow.classList.add('is-open')
}
function funkClosedModal(){
if(!modalWindow.classList.contains('is-open')){
return
}
modalWindow.classList.remove('is-open')
}
