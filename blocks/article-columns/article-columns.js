import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.className = 'article-column-card-wrapper';
    [...row.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture'))
        div.className = 'article-column-card-image';
      else div.className = 'article-column-card-body';
    });
  });
  block
    .querySelectorAll('img')
    .forEach((img) =>
      img
        .closest('picture')
        .replaceWith(
          createOptimizedPicture(img.src, img.alt, false, [{ width: '445' }])
        )
    );
}
