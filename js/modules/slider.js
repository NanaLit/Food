function slider() {
    let slideIndex = 1;
    let offset = 0;
    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    function getCurrentZero() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }
    function getTotalZero() {
        if (slides.length < 10) {
            total.textContent =  `0${slides.length}`;
        } else {
            total.textContent =  slides.length;
        }
    }

    getCurrentZero();
    getTotalZero();
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function sliceOffset() {

        if (offset == deleteNoDigits(width) * (slides.length - 1)) { //'500px'
            offset = 0;
        } else {
            offset += deleteNoDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function stylingDots() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function deleteNoDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        sliceOffset();
        getCurrentZero();
        stylingDots();
    });

    prev.addEventListener('click', () => {

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        sliceOffset();
        getCurrentZero();
        stylingDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNoDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            getCurrentZero();
            stylingDots();
        });
    });
}
module.exports = slider;