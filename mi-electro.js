// function NewTab() {
//     window.open( "reviews-window/reviews-mi-electro.html");
// } 
const callback = () => {
    window.open("reviews-mi-electro.html");
};
const button = document.querySelector('#reviews__button__bt');
button.addEventListener('click', callback);