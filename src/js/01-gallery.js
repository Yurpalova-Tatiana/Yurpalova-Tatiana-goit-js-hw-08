import SimpleLightbox from "simplelightbox";
// console.log(SimpleLightbox);

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


//console.log(galleryItems[0].original);

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = createGalleryMarkup(galleryItems);
function createGalleryMarkup(params) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
}

new SimpleLightbox('.gallery .gallery__link', {
    captionsData: 'alt',
    captionDelay:250,
    /* options */
});