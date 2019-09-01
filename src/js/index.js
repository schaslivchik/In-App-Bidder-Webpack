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

