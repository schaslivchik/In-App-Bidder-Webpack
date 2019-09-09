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
let lanes = document.querySelector('.lanes');
let listGroup = document.querySelectorAll('.list-group');
let popup = document.querySelector('.popup_block');
let closeBtn = document.querySelector('.close__popup');

listGroup[1].addEventListener('click', () => {
    lanes.classList.add('lanes__no-scroll');
    popup.classList.add('open');
    popup.classList.remove('close');
})

closeBtn.addEventListener('click', () => {
    popup.classList.add('close');
    popup.classList.remove('open');
    lanes.classList.remove('lanes__no-scroll');
})


/***
 * inner height screens for app
 */
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});