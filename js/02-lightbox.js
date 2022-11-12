import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector("ul.gallery")

const galleryCard = createGalleryCard(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryCard)

function createGalleryCard(galleryItems) {
   return galleryItems.map(({preview, original,  description}) => {
       return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" 
        title="${description}" /></a></li>`
   }).join('')
  
} 
const gallery = new SimpleLightbox('ul.gallery a');
 gallery.on('show.simplelightbox', function () {
    gallery.options.captionDelay = 250;
  })
console.log(galleryItems);