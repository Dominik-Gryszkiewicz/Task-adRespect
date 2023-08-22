let more = document.querySelectorAll('.more');
let btn = document.querySelector('.btn-overlay');
let overlay = document.querySelector('.overlay');
import {macyInstance} from './masonry'

btn.addEventListener('click', () => {
    more.forEach((img)=>{
        img.style.display = 'block';
    })
    overlay.style.display = 'none';
    macyInstance.reInit();
    window.scrollBy(0, 500);
})