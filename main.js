const toggleNav = document.getElementsByClassName('nav__toggle')[0];
const navList = document.getElementsByClassName('nav__list')[0];
const navItems = [...document.getElementsByClassName('nav__item')];
const body = document.body;
const currentOld = document.getElementById('years-old');
const currentDate = document.getElementById('year-current');

toggleNav.addEventListener('click', toggleSys);
navItems.forEach(item => item.addEventListener('click', closeToggleSys));

function toggleSys() {
  const nav = document.getElementById('nav');
  

  if (nav.classList.contains('nav--close')) {
    toggleNav.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    nav.classList.replace('nav--close', 'nav--open');
    navList.classList.replace('nav__list--hidden', 'nav__list--visible');
    body.classList.add('no-scroll');
  }
  
  else if (nav.classList.contains('nav--open')) {
    toggleNav.innerHTML = '<i class="fa-solid fa-bars"></i>';
    nav.classList.replace('nav--open', 'nav--close');
    navList.classList.replace('nav__list--visible', 'nav__list--hidden');
    body.classList.remove('no-scroll');
  }
}

function closeToggleSys() {
  const nav = document.getElementById('nav');
  toggleNav.innerHTML = '<i class="fa-solid fa-bars"></i>';
  nav.classList.replace('nav--open', 'nav--close');
  navList.classList.replace('nav__list--visible', 'nav__list--hidden');
  body.classList.remove('no-scroll');
}

function calculateAge() {
  const birthDate = new Date('2001-09-28');
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  const day = currentDate.getDate() - birthDate.getDate();
  
  if (month < 0 || (month === 0 && day < 0)) {
    currentOld.textContent = age - 1;
  } else {
    currentOld.textContent = age;
  }
}

calculateAge();

function getCurrentYear() {
  currentDate.textContent = new Date().getFullYear();
}

getCurrentYear();
