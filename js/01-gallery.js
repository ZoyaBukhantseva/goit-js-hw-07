import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")
console.log(galleryRef)
const galleryCard = createGalleryCard(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryCard)

function createGalleryCard(galleryItems) {
   return galleryItems.map(({preview, original,  description}) => {
        return `<div class="gallery__item">
       <a class="gallery__link" href="${original} ">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join('')
  
}
console.log(galleryItems);
    
galleryRef.addEventListener('click', onGalleryClick)

function onGalleryClick(evt) {
     evt.preventDefault();
     
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    // console.log(evt.target.dataset.source);
    const { src, alt } = evt.target;
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="${alt}"/>`)

instance.show()

}

