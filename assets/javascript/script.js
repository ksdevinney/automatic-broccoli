//variables from html
let startButton = document.getElementById("start");
// let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById('results');
let timerElement = document.getElementById("timer");
let questionEl = document.getElementById("question");
let choiceEl = document.getElementById("choices");
let timer = document.getElementById("timer");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let scoresEl = document.getElementById("winners");

let timerCount;
let userInitials;
let displayQuestion;

let rightAnswers = 0;

//questions
const jsQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Brendan Eich", 
            b: "Bill Gates" ,
            c: "George Washington"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the maximum number of values a single JavaScript variable can hold?",
        answers: {
            a: "1", 
            b: "4,294,967,295" ,
            c: "200,000"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is not a primitive variable type?",
        answers: {
            a: "Boolean", 
            b: "String" ,
            c: "Bit"
        },
        correctAnswer: "c"
    },
    {
        question: "What does API stand for?",
        answers: {
            a: "A Pretty Icicle", 
            b: "Angular Program Intervention" ,
            c: "Application Programming Interface"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the most popular JavaScript library?",
        answers: {
            a: "Vanilla", 
            b: "jQuery" ,
            c: "Bootstrap"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a conditional statement used in JavaScript?",
        answers: {
            a: "If then", 
            b: "If else" ,
            c: "If so"
        },
        correctAnswer: "b"
    }
]


function buildQuiz() {
    startTimer();
    //start with first question in array
    displayQuestion = 0;
    loadQuestion();
    timerCount = 30;
}

function loadQuestion() {
    //game cannot be restarted while it is running
    startButton.disabled = true;
    let currentQuestion = jsQuestions[displayQuestion];

    //questions and answer choices
    questionEl.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.answers.a;
    choiceB.textContent = currentQuestion.answers.b;
    choiceC.textContent = currentQuestion.answers.c;
}

choiceA.addEventListener("click" , function() { checkAnswer('a') });
choiceB.addEventListener("click" , function() { checkAnswer('b') });
choiceC.addEventListener("click" , function() { checkAnswer('c') });

//checks answers
function checkAnswer(answer) {
    let currentQuestion = jsQuestions[displayQuestion];
    //adds to rightAnswers variable if correct
    if (answer == currentQuestion.correctAnswer){
        rightAnswers++;
    } else {
        //deducts time if incorrect
        timerCount -= 5;
    }
    displayQuestion++;
    if (displayQuestion < jsQuestions.length) {
        loadQuestion();
    } else {
        //alert instead of asking for initials
        alert("Your score is " + rightAnswers + "! Great job!");
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
        gameEnd();
      }
    }, 1000);
  }
  

//display first question on start
startButton.addEventListener("click", buildQuiz);

//game ends
//prompts for name input
function gameEnd() {
    userInitials = prompt("Enter your name to save your score!");
    clearInterval(timer);
    //user inputs initials
    //score and initials stored in local storage
    localStorage.setItem("winner" , userInitials);
    localStorage.setItem("score" , rightAnswers);
    //allows start button to be clicked
    startButton.disabled = false;
}