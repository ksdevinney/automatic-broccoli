//element on high scores page
var scoresEl = document.getElementById("winners");

//retrives name and score from local storage and displays
scoresEl.textContent = localStorage.getItem("winner") + " - " + localStorage.getItem("score");
