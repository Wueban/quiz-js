// dependecies 
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials")
var timeEl = document.querySelector("#time")

//state 
// put questions into an array 
var questions = [
    {
        fullquestion: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "booleans",
            "all of the above",
            "other arrays",
            "numbers and strings",
        ],
        answer: "all of the above"
      },
      {
        fullquestion:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "for loops", "console.log()"],
        answer: "console.log()"
      },
];
// helper functions 
function beginQuiz(){}
