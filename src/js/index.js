import 'bootstrap';
import './../scss/style.scss';

/**
 * Fixed top blocks at the lanes
 */
const laneScroll = document.querySelectorAll('.lane__item');
[...laneScroll].map(item => item.addEventListener('scroll', (e) => {
    let valuePosition = e.target.scrollTop + 'px';
    item.querySelector('.lane__item-fixed').style.transform = `translateY(${valuePosition})`
    })
);

let listGroup = document.querySelectorAll('.list-group');

// listGroup[1].addEventListener('click', () => {
//     let div = document.createElement('div')
//     document.querySelector('body').appendChild(div).classList.add('popup')
// })
