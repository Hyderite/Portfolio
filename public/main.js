document.querySelector("#about-me").onscroll = function() {
  document.querySelector("#title-1").style.animation = "fadein-from-bottom .75s forwards";
};
// about me fade in

const element1 = document.querySelector("#title-1"), element2 = document.querySelector(".codebox-1")
var scrollOffset = 100;

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  element1.classList.add("scrolled");
  element2.classList.add("scrolled");
};
 
const handleScrollAnimation = () => {
  if (elementInView(element1, scrollOffset)) {
      displayScrollElement();
  };
};
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// projects fade in

const element4 = document.querySelector("#title-2"), element5 = document.querySelector("#projects-container"), element6 = document.querySelector("#more-info-2");
const scrollOffset2 = 100;

const elementInView2 = (el, offset = 0) => {
  const elementTop2 = el.getBoundingClientRect().top;
 
  return (
    elementTop2 <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement2 = () => {
  element4.classList.add("scrolled");
  element5.classList.add("scrolled");
  element6.classList.add("scrolled");
};
 
const handleScrollAnimation2 = () => {
  if (elementInView(element4, scrollOffset2)) {
      displayScrollElement2();
  };
};
 
window.addEventListener('scroll', () => {
  handleScrollAnimation2();
});