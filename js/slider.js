const leftSliderBtn = document.querySelector('.arrow-left');
const rightSliderBtn = document.querySelector('.arrow-right');
const reviewsSliderItem = document.querySelectorAll('.reviews-slider__item');

const arrayOfReviews  = Array.from(reviewsSliderItem);

leftSliderBtn.addEventListener('click', () => {
    plusSlider(-1);
});

rightSliderBtn.addEventListener('click', () => {
    plusSlider(1);
});

let slideIndex = 1;

function showSlides(index) {
    if (index > arrayOfReviews.length) {
        slideIndex = 1;
    }

    if (index < 1) {
        slideIndex = arrayOfReviews.length;
    }

    hideReviews();
    arrayOfReviews[slideIndex - 1].classList.add('reviews-slider__item--active');
}

showSlides(slideIndex);


function hideReviews() {
    arrayOfReviews.forEach( item => {
        item.classList.remove('reviews-slider__item--active');
    });
}

function plusSlider(n) {
    showSlides(slideIndex += n);
}
