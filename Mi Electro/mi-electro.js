// function setTheme(themeName) {
//   localStorage.setItem('theme', themeName);
//   document.documentElement.className = themeName;
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-light');
//   } else {
//     setTheme('theme-dark');
//   }
// }

// // Immediately invoked function to set the theme on initial load
// (function () {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-dark');
//     document.getElementById('slider').checked = false;
//   } else {
//     setTheme('theme-light');
//     document.getElementById('slider').checked = true;
//   }
// })();

import Swiper from 'swiper';
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

});
