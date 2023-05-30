var questions = [
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ]
  },
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Girrafe", correct: false },
    ]
  }
]

var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0


function startQuiz() {
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = "Next"
  showQuestion();
}


function showQuestion() {
  resetState()

  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question

  currentQuestion.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerHTML = answer.text
    button.classList.add("btn")
    answerButtons.appendChild(button)

    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)

  })
}


function resetState() {
  nextButton.style.display = "none"
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}


function selectAnswer(e) {
  
  var selectedBtn = e.target;
  var isCorrect = selectedBtn.dataset.correct === "true"

  if (isCorrect) {
    selectedBtn.classList.add("correct")
    score++
  }
   else {
    selectedBtn.classList.add("incorrect")
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct")
    }
    button.disabled = true
  })
  nextButton.style.display = "block"
}

function showScore() {
  resetState()
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block"
}

function handleNextButton() {
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion()

  } else {
    showScore()
  }

}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton()
  } else {
    startQuiz()
  }
})

startQuiz()



// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "Madrid", "Rome", "Berlin"],
//     answer: "Paris"
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
//     answer: "Leonardo da Vinci"
//   },
//   // Add more questions here...
// ];

// const quizContainer = document.getElementById("quiz");
// const submitButton = document.getElementById("submit-btn");
// const resultContainer = document.getElementById("result");

// function buildQuiz() {
//   const output = [];

//   quizData.forEach((questionData, questionIndex) => {
//     const options = [];

//     questionData.options.forEach((option, optionIndex) => {
//       options.push(
//         `<label>
//            <input type="radio" name="question${questionIndex}" value="${option}">
//            ${option}
//          </label>`
//       );
//     });

//     output.push(
//       `<div class="question">
//          <h3>${questionData.question}</h3>
//          ${options.join("")}
//        </div>`
//     );
//   });

//   quizContainer.innerHTML = output.join("");
// }

// function showResults() {
//   const answerContainers = quizContainer.querySelectorAll(".question");
//   let score = 0;

//   quizData.forEach((questionData, questionIndex) => {
//     const answerContainer = answerContainers[questionIndex];
//     const selectedOption = answerContainer.querySelector(`input[name="question${questionIndex}"]:checked`);

//     if (selectedOption && selectedOption.value === questionData.answer) {
//       score++;
//       answerContainer.style.color = "green";
//     } else {
//       answerContainer.style.color = "red";
//     }
//   });

//   resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}.`;
// }

// buildQuiz();

// submitButton.addEventListener("click", showResults);
