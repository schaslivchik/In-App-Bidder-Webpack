let swipeZone = document.getElementById('swipezone');
let dragItem = document.querySelector('.circle-bidding');

// swipedElement.addEventListener('touchstart', ()=> console.log('touch'))
var active = false;
    var currentX;
    var initialX;
    var xOffset = 0;

    swipeZone.addEventListener("touchstart", dragStart, false);
    swipeZone.addEventListener("touchend", dragEnd, false);
    swipeZone.addEventListener("touchmove", drag, false);

    // swipeZone.addEventListener("mousedown", dragStart, false);
    // swipeZone.addEventListener("mouseup", dragEnd, false);
    // swipeZone.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
      } else {
        initialX = e.clientX - xOffset;
      }
      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      active = false;
    }

    function drag(e) {
      if (active) {
        e.preventDefault();
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
        } else {
          currentX = e.clientX - initialX;
        }
        xOffset = currentX;
        setTranslate(currentX, dragItem);
      }
    }

    function setTranslate(xPos, el) {
        el.style.transform = "translateX(" + xPos + "px)";
     
    }
    