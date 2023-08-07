if (window.matchMedia("(max-width: 480px)").matches) {
  document.querySelector("#mob-nav-btn").style.display = "block";
  document.querySelector("#cross").style.display = "block";
  document.querySelector("#mob-navbar").style.display = "block";
  document.querySelector("#pc-nav-btn").style.display = "none";
} else {
  document.querySelector("#mob-nav-btn").style.display = "none";
  document.querySelector("#cross").style.display = "none";
  document.querySelector("#mob-navbar").style.display = "none";
  document.querySelector("#pc-nav-btn").style.display = "block";
};

document.querySelector("#mob-nav-btn").onclick = function() {
  document.querySelector("#mob-nav-btn").style.animation = "fadeout .75s forwards";
  document.querySelector("#mob-nav-btn").style.zIndex = "0";
  document.querySelector("#cross").style.zIndex = "1";
  document.querySelector("#cross").style.animation = "fadein .75s forwards";
  document.querySelector("#mob-navbar").style.animation = "fadein .75s forwards";
};

document.querySelector("#cross").onclick = function() {
  document.querySelector("#cross").style.animation = "fadeout .75s forwards";
  document.querySelector("#mob-nav-btn").style.zIndex = "1";
  document.querySelector("#cross").style.zIndex = "0";
  document.querySelector("#mob-nav-btn").style.animation = "fadein .75s forwards";
  document.querySelector("#mob-navbar").style.animation = "fadeout .75s forwards";
};
