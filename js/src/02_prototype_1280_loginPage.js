function home(){
  let url = "https://main--dashing-elf-ee36a3.netlify.app/html/01_prototype_1280_main.html";
  window.location = url;
}

function login(){
  let url = "https://main--dashing-elf-ee36a3.netlify.app/html/02_prototype_1280_loginpage";
  window.location = url;
}

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
