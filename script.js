//variables
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById('results');
var timerElement = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choiceEl = document.getElementById("choices");
var timer = document.getElementById("timer");

var timerCount;
var rightAnswers;
var userInitials;

//questions
const jsQuestions = [
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "hot dog"
        },
        correctAnswer: "a"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "hot dog"
        },
        correctAnswer: "b"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "hot dog"
        },
        correctAnswer: "c"
    }
]

function loadQuestion () {
    quizContainer.textContent = jsQuestions[Math.floor(Math.random() * jsQuestions.length)];

}

function buildQuiz() {
    startTimer();
    loadQuestion();
    timerCount = 10;
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    //   if (timerCount >= 0) {
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
    //   }
    //   // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        alert("Game over!");
      }
    }, 1000);
  }
  

//display first question on start
startButton.addEventListener("click", buildQuiz);

//timer starts as first question is displayed


//init is called when the page loads
function init() {
    buildQuiz();
}

submitButton.addEventListener("click" , gameEnd);

function gameEnd() {
    rightAnswers = 3;    
    userInitials = prompt("Enter your name to save your score!");
    console.log(userInitials, rightAnswers);
}

//pick an answer
//if it is right, some sort of notification (answer turns green?)

//if it is wrong, notification (answer turns red?)
//timer deducts 5 seconds

//game ends when all questions are answered
//or timer hits zero

//game ends

//score is stored in local storage

//user inputs initials

//score and initials are displayed