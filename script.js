let menu = document.querySelector('#menu_bars');
let nav_home = document.querySelector('.nav_home');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  nav_home.classList.toggle('active');
}

menu.onscroll = () =>{
  menu.classList.remove('fa-times');
  nav_home.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});