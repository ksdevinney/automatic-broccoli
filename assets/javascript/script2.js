var scoresEl = document.getElementById("winners");

scoresEl.textContent = localStorage.getItem("winner") + " - " + localStorage.getItem("score");
