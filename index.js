const HAMBURGER = document.querySelector('.hamburger');
const MENU = document.querySelector('.menu');
const MENU_LINK = document.querySelectorAll('.menu__link');
const BODY = document.querySelector('body');
const themetoggle = document.querySelector('.themetoggle');

window.addEventListener('click', function (e) {
    if (!MENU.contains(e.target) && !HAMBURGER.contains(e.target)) {
        MENU.classList.remove('open');
        themetoggle.classList.remove('toggle-open');
        HAMBURGER.classList.remove('rotate');
        BODY.classList.remove('unscroll');
    }
});

HAMBURGER.addEventListener('click', ()=> {
    MENU.classList.toggle('open');
    themetoggle.classList.toggle('toggle-open');
    HAMBURGER.classList.toggle('rotate');
    BODY.classList.toggle('unscroll');
})

MENU.addEventListener('click', (e)=>{
    if(e.target.classList['value'] === 'menu__link'){
        MENU.classList.remove('open');
        themetoggle.classList.remove('toggle-open');
        HAMBURGER.classList.remove('rotate');
        BODY.classList.remove('unscroll');
    }
});

const goTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {

    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight/2;

  if (scrolled > coords) {

        goTopBtn.classList.add("back-to-top--show");

    } else {
        goTopBtn.classList.remove("back-to-top--show");
    }
}

function goTop() {
 
    if (window.pageYOffset > 0) {
    
        window.scrollBy(0, -30,); 
        setTimeout(goTop, 0); 
        
    }
}
document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
  });
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.themetoggle span').textContent = 'dark_mode';
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const sectionID = anchor.getAttribute('href').substring(1)
    
    document.getElementById(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
