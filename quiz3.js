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
      },
      {
        question: "How many rings are there on the Olympic flag?",
        options: ["4", "5", "6", "7"],
        answer: 1
      },
      {
        question: "Which sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
        answer: 1
      },
      {
        question: "Who is known as the fastest man in the world?",
        options: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"],
        answer: 0
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "UK", "Russia"],
        answer: 1
      },
      {
        question: "What is the national sport of Japan?",
        options: ["Sumo Wrestling", "Karate", "Judo", "Baseball"],
        answer: 0
      },
      {
        question: "How many players are on a soccer team (on the field)?",
        options: ["9", "10", "11", "12"],
        answer: 2
      },
      {
        question: "Which tennis player has won the most Grand Slam titles?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"],
        answer: 2
      },
      {
        question: "What is the maximum score in a single frame of bowling?",
        options: ["30", "20", "10", "40"],
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
      },
      {
        question: "Which device is used to input text?",
        options: ["Monitor", "Keyboard", "Mouse", "Speaker"],
        answer: 1
      },
      {
        question: "What does USB stand for?",
        options: ["Universal Serial Bus", "United System Board", "Ultra Speed Band", "Universal System Base"],
        answer: 0
      },
      {
        question: "Which company makes the Galaxy series of smartphones?",
        options: ["Apple", "Samsung", "Google", "Huawei"],
        answer: 1
      },
      {
        question: "What is the main function of a router?",
        options: ["Store data", "Connect networks", "Display images", "Print documents"],
        answer: 1
      },
      {
        question: "Which device is used to project images onto a screen?",
        options: ["Scanner", "Projector", "Printer", "Monitor"],
        answer: 1
      },
      {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read Access Module", "Rapid Action Machine", "Remote Access Memory"],
        answer: 0
      },
      {
        question: "Which company makes Surface laptops?",
        options: ["Apple", "Microsoft", "Dell", "HP"],
        answer: 1
      },
      {
        question: "What is the main function of a printer?",
        options: ["Scan documents", "Print documents", "Store files", "Connect to the internet"],
        answer: 1
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
      },
      {
        question: "Which actor played Iron Man in the Marvel movies?",
        options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        answer: 1
      },
      {
        question: "Which movie features the song 'Let It Go'?",
        options: ["Moana", "Frozen", "Tangled", "Coco"],
        answer: 1
      },
      {
        question: "Who played the Joker in 'The Dark Knight'?",
        options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
        answer: 1
      },
      {
        question: "Which movie is about a theme park with cloned dinosaurs?",
        options: ["Jurassic Park", "King Kong", "Avatar", "Jumanji"],
        answer: 0
      },
      {
        question: "Which movie won Best Picture at the 2020 Oscars?",
        options: ["1917", "Parasite", "Joker", "Ford v Ferrari"],
        answer: 1
      },
      {
        question: "Who directed 'Titanic'?",
        options: ["James Cameron", "Steven Spielberg", "Peter Jackson", "Ridley Scott"],
        answer: 0
      },
      {
        question: "Which movie is about toys that come to life?",
        options: ["Toy Story", "Cars", "Shrek", "Finding Nemo"],
        answer: 0
      },
      {
        question: "Which actress starred in 'La La Land'?",
        options: ["Emma Stone", "Jennifer Lawrence", "Scarlett Johansson", "Anne Hathaway"],
        answer: 0
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
      },
      {
        question: "Which company makes Galaxy smartphones?",
        options: ["Apple", "Samsung", "Google", "Huawei"],
        answer: 1
      },
      {
        question: "What is the main function of a SIM card?",
        options: ["Store photos", "Connect to network", "Charge phone", "Play music"],
        answer: 1
      },
      {
        question: "Which phone brand uses iOS?",
        options: ["Samsung", "Apple", "Nokia", "Tecno"],
        answer: 1
      },
      {
        question: "What does SMS stand for?",
        options: ["Short Message Service", "Send Message Soon", "Simple Mobile Service", "Smart Messaging System"],
        answer: 0
      },
      {
        question: "Which company makes Pixel phones?",
        options: ["Google", "Apple", "Samsung", "Nokia"],
        answer: 0
      },
      {
        question: "What is the main function of Bluetooth on a phone?",
        options: ["Make calls", "Transfer files", "Take photos", "Charge battery"],
        answer: 1
      },
      {
        question: "Which phone brand is known for 'Redmi'?",
        options: ["Xiaomi", "Oppo", "Vivo", "Samsung"],
        answer: 0
      },
      {
        question: "What is the main function of airplane mode?",
        options: ["Connect to WiFi", "Disable wireless signals", "Increase volume", "Take screenshots"],
        answer: 1
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

