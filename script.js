//variables
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById('results');
var timerElement = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choiceEl = document.getElementById("choices");

var timer;
var timerCount;

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
    showQuestion = jsQuestions[Math.floor(Math.random() * jsQuestions.length)];

}

function buildQuiz() {
    timerCount = 60;
    loadQuestion();
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            clearInterval(timer);
            winGame();
        }
    })
}

//display first question on start
startButton.addEventListener("click", buildQuiz);

//timer starts as first question is displayed


//init is called when the page loads
function init() {
    buildQuiz();
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