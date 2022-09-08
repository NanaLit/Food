import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs();
    modal('[data-modal', '.modal', modalTimerId);
    calc();
    cards();
    forms('form', modalTimerId);
    slider();
    timer();
    
    // Tabs
    
    // Timer


    //Modal

    // const getModal = document.querySelectorAll('[data-modal]'),
    //       closeModal = document.querySelector('[data-close'),
    //       modal = document.querySelector('.modal');

    // getModal.forEach(item => {
    //     item.addEventListener('click', function() {
    //         modal.style.display = 'block';
    //     } );
    // });
    // closeModal.addEventListener('click', function() {
    //     modal.style.display = 'none';
    // });
    
    // Используем классы для карточек

    // axios.get('http://localhost:3000/menu')
    // .then(data => {
    //     data.data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
    //     });
    // });

    // getResource('http://localhost:3000/menu')
    // .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });  
    // }
    //Forms

    
    // Slider
    // let slideIndex = 0;
    // let slide = document.querySelectorAll('.offer__slide');
    // const nextArrow = document.querySelector('.offer__slider-next'),
    //       prevArrow = document.querySelector('.offer__slider-prev'),
    //       current = document.querySelector('#current'),
    //       total = document.querySelector('#total');

    // function hideSlideContent () {
    //     slide.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show');
    //         const allNumber = getZero(slide.length);
    //         total.innerHTML =`${allNumber}`;
    //     });
    // }

    // function showSlideContent(i = 0) {
    //     slide[i].classList.add('show');
    //     slide[i].classList.remove('hide');
    //     let number = getZero(i + 1);
    //     current.innerHTML = `${number}`;
        
    // }
    // hideSlideContent ();
    // showSlideContent();


    // function plusSlides (n) {
    //     if(slideIndex == (slide.length-1)) {
    //         slideIndex = -1;
            
    //     }
    //     hideSlideContent(slideIndex);
    //     showSlideContent(slideIndex += n);
    // }

    // function minusSlides (n) {
    //     if (slideIndex == 0) {
    //         slideIndex = (slide.length);
    //     }
    //     hideSlideContent(slideIndex);
    //     showSlideContent(slideIndex -= n);
    // }

    // nextArrow.addEventListener('click', function(i) {
    //     plusSlides (1);
    // });

    // prevArrow.addEventListener('click', function(i) {
    //     minusSlides (1);
    // });

    

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((item) => item.classList.add('hide'));

    //     slides[slideIndex - 1].classList.remove('hide'); 
        
    //     if (slides.length < 10) {
    //         current.textContent =  `0${slideIndex}`;
    //     } else {
    //         current.textContent =  slideIndex;
    //     }
    // }

    // function plusSlides (n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', function(){
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', function(){
    //     plusSlides(1);
    // });

    //Calc

    
});