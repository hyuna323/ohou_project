// 01_prototype_1280_main.js
alert('교육 목적으로 제작된 페이지입니다.')

function home(){
  let url = "https://main--dashing-elf-ee36a3.netlify.app/html/01_prototype_1280_main.html";
  window.location = url;
}

function login(){
  let url = "https://main--dashing-elf-ee36a3.netlify.app/html/02_prototype_1280_loginpage";
  window.location = url;
}

// 
var slideIndex = 0;

// html 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  const sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  const slides = document.getElementsByClassName("viewport");
  const size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[n].style.display = "block";
}

// 관련 선택
//footsubmenu 선택, language part 선택, language_btn선택 ul 선택
const elfootSubmenu = document.querySelector('.footsubmenu');
const elBrandsitePart = elfootSubmenu.querySelector('.brandsite_part');
const BrandsiteBtn = elBrandsitePart.querySelector('.brandsite_btn');
const Belul = elBrandsitePart.querySelector('ul');

BrandsiteBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = Belul.classList.contains('on');
  (check) ? Belul.classList.remove('on') : Belul.classList.add('on');
});

elBrandsitePart.addEventListener('mouseleave', e => {
  e.preventDefault();
  Belul.classList.remove('on');
});
