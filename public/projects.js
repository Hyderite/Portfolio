document.querySelector(".source-btn-replit").onmouseover = function() {
  document.querySelector(".projects-replit").style.fill = "#000";
};

document.querySelector(".source-btn-replit").onmouseout = function() {
  document.querySelector(".projects-replit").style.fill = "#fff";
};

document.querySelectorAll(".source-btn-github").forEach(function(btn) {
  btn.onmouseover = function() {
    document.querySelectorAll(".projects-github").forEach(function(logo) {
      logo.style.fill = "#000";
    });
  };

  btn.onmouseout = function() {
    document.querySelectorAll(".projects-github").forEach(function(logo) {
      logo.style.fill = "#fff";
    });
  };
});
