const parallax = document.querySelectorAll(".parallax_item");
// const home = document.querySelector('#home')
// const deatails = document.querySelector('details')
const navBar = document.querySelector('.nav__bar')
navBar.addEventListener('click', function(event) {
    const item = event.target.closest('.nav__item')
    if(!item) return
    document.getElementById(item.dataset.section).scrollIntoView({behavior: 'smooth'})
    console.log(item);
})
const parallaxFn = function () {
  if (window.innerWidth < 1024) return;
  xCord = event.clientX - window.innerWidth / 2;
  yCord = event.clientY - window.innerHeight / 2;
  parallax.forEach((element) => {
    let speedX = Number(element.dataset.speedx),
      speedY = Number(element.dataset.speedy),
      translatex = Number(element.dataset.translatex),
      translatey = Number(element.dataset.translatey);

    element.style.transform = `translateX(calc(${translatex}% + ${
      xCord * speedX
    }px)) translateY(calc(${translatey}% + ${yCord * speedY}px))`;
  });
};
window.addEventListener("mousemove", parallaxFn);
const imgLoadCbFn = function (enteries, observer) {
    enteries.forEach(entry => {
      if (!entry.isIntersecting) return;
      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
        
      });
      observer.unobserve(entry.target);
    })
};
const imgs = document.querySelectorAll('img')
const imgObserver = new IntersectionObserver(imgLoadCbFn, {
  root: null,
  // rootMargin: "200px",
  threshold: 0,
});
imgs.forEach(img => imgObserver.observe(img))