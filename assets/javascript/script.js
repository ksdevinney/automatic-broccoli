//variables
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById('results');
var timerElement = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choiceEl = document.getElementById("choices");
var timer = document.getElementById("timer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var scoresEl = document.getElementById("winners");

var timerCount;
var userInitials;
var displayQuestion;

let rightAnswers = 0;

submitButton.disabled = true;

//questions
const jsQuestions = [
    {
        question: "Choose a number.",
        answers: {
            a: "correct", 
            b: "threve" ,
            c: "hot dog"
        },
        correctAnswer: "a"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "correct" ,
            c: "hot dog"
        },
        correctAnswer: "b"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "correct"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "correct"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "correct"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose a number.",
        answers: {
            a: "1", 
            b: "threve" ,
            c: "correct"
        },
        correctAnswer: "c"
    }
]

function buildQuiz() {
    startTimer();
    displayQuestion = 0;
    loadQuestion();
    timerCount = 10;
    submitButton.disabled = false;
}

function loadQuestion() {
    let currentQuestion = jsQuestions[displayQuestion];

    questionEl.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.answers.a;
    choiceB.textContent = currentQuestion.answers.b;
    choiceC.textContent = currentQuestion.answers.c;
}

choiceA.addEventListener("click" , function() { checkAnswer('a') });
choiceB.addEventListener("click" , function() { checkAnswer('b') });
choiceC.addEventListener("click" , function() { checkAnswer('c') });

function checkAnswer(answer) {
    let currentQuestion = jsQuestions[displayQuestion];
    if (answer == currentQuestion.correctAnswer){
        rightAnswers++;
    } else {
        timerCount -= 5;
    }
    displayQuestion++;
    if (displayQuestion < jsQuestions.length) {
        loadQuestion();
    } else {
        //alert instead of asking for initials
        alert("Your score is " + rightAnswers + "!");
        gameEnd();
    }
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        alert("Game over!");
      }
    }, 1000);
  }
  

//display first question on start
startButton.addEventListener("click", buildQuiz);

//init is called when the page loads
// function init() {
//     buildQuiz();
// }

submitButton.addEventListener("click" , gameEnd);

//game ends
function gameEnd() {
    userInitials = prompt("Enter your name to save your score!");
    //user inputs initials
    localStorage.setItem("winner" , userInitials);
    localStorage.setItem("score" , rightAnswers);
}

//score is stored in local storage