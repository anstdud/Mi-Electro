const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const callback = () => {
    window.open("reviews-mi-electro.html");
};
const button = document.querySelector('#reviews__button__bt');
button.addEventListener('click', callback);