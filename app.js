window.onload = function () {
  var element = document.querySelector(".htmlcopy h1");
  element.style.animationPlayState = "running";
};

function toggleBlink() {
  var element = document.getElementById("blink");
  element.classList.toggle("blinking");
}
setInterval(toggleBlink, 1000);
