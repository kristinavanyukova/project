let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider__switch--right').addEventListener('click', function(){
    offset = offset + 1349;
    if (offset > 3000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__switch--left').addEventListener('click', function () {
    offset = offset - 1349;
    if (offset < 3000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
