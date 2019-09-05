import 'bootstrap';
import './../scss/style.scss';
import './touch.js'

/**
 * Fixed top blocks at the lanes
 */
// const laneScroll = document.querySelectorAll('.lane__item');
// [...laneScroll].map(item => item.addEventListener('scroll', (e) => {
//     let valuePosition = e.target.scrollTop + 'px';
//     item.querySelector('.lane__item-fixed').style.transform = `translateY(${valuePosition})`
//     })
// );


/**
 * Popup open and close
 */
let listGroup = document.querySelectorAll('.list-group');
let popup = document.querySelector('.popup_block');
let closeBtn = document.querySelector('.close__popup');

listGroup[1].addEventListener('click', () => {
    popup.classList.add('open');
    popup.classList.remove('close');
})

closeBtn.addEventListener('click', () => {
    popup.classList.add('close');
    popup.classList.remove('open');
})

