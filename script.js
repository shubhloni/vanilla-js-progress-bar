prevBtn = document.getElementById('prev-btn');
nextBtn = document.getElementById('next-btn');
circles = document.querySelectorAll('.circle');
progress = document.querySelector('.progress');

let activeCircles = 0;
let progressWidth = 0;
const circleLen = circles.length;

// Disable buttons
function btnDisable() {
  if (activeCircles === 0) {
    prevBtn.disabled = true;
  } else if (activeCircles === circleLen) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

prevBtn.addEventListener('click', () => {
  if (activeCircles > 0) {
    activeCircles--;
    circles[activeCircles].classList.remove('active');
    if (activeCircles !== 0) {
      progressWidth -= 25;
      progress.style.width = `${progressWidth}%`;
    }
  }
  btnDisable();
});

nextBtn.addEventListener('click', () => {
  if (activeCircles < circleLen) {
    circles[activeCircles].classList.add('active');
    if (activeCircles !== 0) {
      progressWidth += 25;
      progress.style.width = `${progressWidth}%`;
    }
    activeCircles++;
  }
  btnDisable();
});
