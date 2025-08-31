// ✅ Question sets by category
const questionSets = {
  sports: [
    {
      question: "Which country won the 2018 FIFA World Cup?",
      options: ["Brazil", "France", "Germany", "Argentina"],
      answer: 1
    },
    {
      question: "In basketball, how many players per team are on the court?",
      options: ["5", "6", "7", "11"],
      answer: 0
    }
  ],
  devices: [
    {
      question: "Which company makes the PlayStation?",
      options: ["Microsoft", "Sony", "Nintendo", "Apple"],
      answer: 1
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Power Utility", "Core Power Unit", "Central Power Unit"],
      answer: 0
    }
  ],
  movies: [
    {
      question: "Who directed the movie *Inception*?",
      options: ["Christopher Nolan", "James Cameron", "Steven Spielberg", "Quentin Tarantino"],
      answer: 0
    },
    {
      question: "Which is the highest-grossing film of all time (as of 2025)?",
      options: ["Titanic", "Avengers: Endgame", "Avatar", "Frozen II"],
      answer: 2
    }
  ],
  phones: [
    {
      question: "Which company created the first iPhone?",
      options: ["Samsung", "Apple", "Nokia", "Google"],
      answer: 1
    },
    {
      question: "What does ‘IMEI’ stand for?",
      options: ["International Mobile Equipment Identity", "Internal Mobile Engine Identifier", "Internet Mobile Electronic Identity", "International Main Equipment Identity"],
      answer: 0
    }
  ]
};

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

function goToCategory() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("category-screen").style.display = "block";
}

function selectCategory(category) {
  selectedQuestions = questionSets[category]; // pick category
  currentQuestion = 0;
  score = 0;

  document.getElementById("category-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

function showQuestion() {
  let questionElement = document.getElementById("question");
  let optionsElement = document.getElementById("options");
  let nextBtn = document.getElementById("next-btn");
  let progressElement = document.getElementById("progress");
  let progressBar = document.getElementById("progress-bar");

  nextBtn.style.display = "none";
  optionsElement.innerHTML = "";

  let q = selectedQuestions[currentQuestion];
  questionElement.innerText = q.question;

  // ✅ Show progress text
  progressElement.innerText = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;

  // ✅ Update progress bar
  let progressPercent = ((currentQuestion + 1) / selectedQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  // ✨ Fade-in effect
  questionElement.classList.remove("fade-in");
  void questionElement.offsetWidth;
  questionElement.classList.add("fade-in");

  q.options.forEach((option, index) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn", "fade-in");
    button.style.animationDelay = `${index * 0.1}s`;
    button.onclick = () => checkAnswer(button, index);
    li.appendChild(button);
    optionsElement.appendChild(li);
  });
}

function checkAnswer(button, selectedIndex) {
  let correctIndex = selectedQuestions[currentQuestion].answer;
  let optionButtons = document.querySelectorAll(".option-btn");

  optionButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === correctIndex) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    optionButtons[correctIndex].classList.add("correct");
  }

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById("score").innerText = `${score} / ${selectedQuestions.length}`;
}

function restartQuiz() {
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("category-screen").style.display = "block";
}
