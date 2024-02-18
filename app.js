window.onload = function () {
  var element = document.querySelector(".htmlcopy h1");
  element.style.animationPlayState = "running";
};

function toggleBlink() {
  var element = document.getElementById("blink");
  element.classList.toggle("blinking");
}
setInterval(toggleBlink, 1000);
const quotes = [
  {
    didyou: "Did you know?",
    answer: "There are around 700 separate programming languages",
  },
  {
    didyou: "Did you know?",
    answer:
      " The world’s first computer programmer was a renowned female mathematician",
  },
  {
    didyou: "Did you know?",
    answer: "Many owners of large tech companies loved video games as kids",
  },

  {
    didyou: "Did you know?",
    answer:
      "The first-ever computer game made zero profit for its team of creators",
  },
  {
    didyou: "Did you know?",
    answer: "The first computer “bug” was an actual real-life bug",
  },
  {
    didyou: "Did you know?",
    answer: "Coding isn’t just for the tech industry",
  },
  {
    didyou: "Did you know?",
    answer:
      "Computer Programming played a huge role in ending the World War II",
  },
];

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

// const randomIndex = Math.floor(Math.random() * quotes.length);
// const randomQuote = quotes[randomIndex];
// document.getElementById("didyou").innerText = randomQuote.didyou;
// document.getElementById("answer").innerText = randomQuote.answer;

function goToNextPage() {
  var count = 3;
  var countdownInterval = setInterval(function () {
    if (count > 0) {
      document.getElementById("welcomeHeader").style.display = "none";
      document.querySelector("#welcomeMessage button").style.display = "none";
      document.querySelector(".countdown").innerText = count;
      count--;

      document.querySelector("#welcomeMessage button").display = "none";
    } else {
      clearInterval(countdownInterval);
      window.location.href = "main.html";
    }
  }, 1000);

  var didyouElement = document.getElementById("didyou");
  var answerElement = document.getElementById("answer");
  didyouElement.classList.remove("did");
  answerElement.classList.remove("did");

  // Delay the display of "didyou" and "answer" by 1 second
  setTimeout(function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("didyou").innerText = randomQuote.didyou;
    document.getElementById("answer").innerText = randomQuote.answer;
  }, 1000);
}
