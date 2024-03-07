var plausible = document.createElement('script')
plausible.defer = true
plausible.setAttribute('data-domain', 'minimal.guide')
plausible.src = 'https://plausible.io/js/script.outbound-links.js'
document.head.appendChild(plausible)

let globalImages = [];
let currentImageIndex = 0;

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

publish.registerMarkdownPostProcessor(async (el, ctx) => {
  const blockImages = Array.from(el.querySelectorAll('.internal-embed'));

  blockImages.forEach((image, index) => {
    if (!image.classList.contains('processed')) {
      image.classList.add('processed');

      const imageUrl = image.src || image.getAttribute('data-src');
      preloadImage(imageUrl);
      globalImages.push(image);

      image.addEventListener('click', function() {
        currentImageIndex = globalImages.indexOf(this);
        const lightboxDiv = document.createElement('div');
        lightboxDiv.classList.add('lightbox');
        const contentToMove = this.cloneNode(true);
        lightboxDiv.appendChild(contentToMove);
        document.body.appendChild(lightboxDiv);

        const removeLightbox = () => {
          document.body.removeChild(lightboxDiv);
          document.removeEventListener('keydown', keyListener);
        };

        lightboxDiv.addEventListener('click', removeLightbox);

        const keyListener = (event) => {
          if (event.key === "Escape") {
            removeLightbox();
          } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            if (event.key === "ArrowRight") {
              currentImageIndex = (currentImageIndex + 1) % globalImages.length;
            } else {
              currentImageIndex = (currentImageIndex - 1 + globalImages.length) % globalImages.length;
            }
            lightboxDiv.innerHTML = '';
            const newContent = globalImages[currentImageIndex].cloneNode(true);
            lightboxDiv.appendChild(newContent);
          }
          if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
          }
        };

        document.addEventListener('keydown', keyListener);
      });
    }
  });
});
