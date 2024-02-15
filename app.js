window.onload = function () {
  var element = document.querySelector(".htmlcopy h1");
  element.style.animationPlayState = "running";
};

function toggleBlink() {
  var element = document.getElementById("blink");
  element.classList.toggle("blinking");
}
setInterval(toggleBlink, 1000);

function showWelcomeMessage() {
  var name = document.getElementById("name").value;
  if (name.trim() !== "") {
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("welcomeHeader").innerText = "WELCOME, " + name;
    document.getElementById("welcomeMessage").style.display = "block";
  } else {
    alert("Please write your name");
  }
}
function goToNextPage() {
  var count = 3;
  var countdownInterval = setInterval(function () {
    if (count > 0) {
      document.getElementById("welcomeHeader").style.display = "none";
      document.querySelector("#welcomeMessage button").style.display = "none";

      document.querySelector(".countdown").innerText = count;

      count--;
      document.querySelector("#welcomeMessage button").display = none;
    } else {
      clearInterval(countdownInterval);
      window.location.href = "main.html";
    }
  }, 1000);
}
