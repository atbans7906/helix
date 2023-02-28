import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  let getAllEle = '';
  [...block.children].forEach((row) => {
    getAllEle = row.innerHTML;
    block.innerHTML = getAllEle;
  });
  [...block.children].forEach((row, ele) => {
    if (row.children.length === 1 && row.querySelector('picture')) {
      row.className = 'banner-image';
      row
        .querySelectorAll('img')
        .forEach((img) =>
          img
            .closest('picture')
            .replaceWith(
              createOptimizedPicture(img.src, img.alt, false, [
                { width: '1920' },
              ])
            )
        );
    } else row.className = 'banner-image-content';
  });
}
