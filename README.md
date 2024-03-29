# Quiz

## Description

![quiz preview](/assets/images/quiz-preview.png)

This is a quiz application created in JavaScript. When the user clicks that Start button, questions about JavaScript will appear on the page. When the first question loads, a timer starts counting down from 30. The user will try to answer all the questions before time runs out. However, if a question is answered incorrectly, 5 seconds are deducted from the timer.

When the user has answered all questions, or when the timer runs out, an alert will show the user their score (number of questions answered correctly). Then, the user will be prompted to input their name. The most recent result will be displayed with the inputted name and raw score. If no name is provided, the name will register as "null". If there are no results saved in the browser's local storage, the high score will display as "null - null."

## Motivation

The goal of creating this project was to learn more about how JavaScript and HTML interact on a webpage. The timer and questions were implemented using JavaScript, which references HTML elements on the page.

High scores and names inputted by the user are stored in the browser's local storage, then retrieved on the High Scores page. Only the most recent name and score are shown. The page was created using HTML, then formatted using CSS. The questions are stored in JavaScript, while the static elements (page titles) are embedded in the HTML.

## How to Access

The application is deployed on GitHub pages, found [here](https://ksdevinney.github.io/automatic-broccoli/).


