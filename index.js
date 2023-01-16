var readlineSync = require("readline-sync");

var score = 0;

// All High scores :
var highScores = [
  {
    name: "Sanji",
    score: 5,
  },
  {
    name: "Zoro",
    score: 3,
  },
  {
    name: "Ussop",
    score: 3,
  },
  {
    name: "Manthan",
    score: 4,
  },
  {
    name: "Luffy",
    score: 2,
  },
];

// Questions :
var questions = [
  {
    question: "Who is main character of One Piece Anime? ",
    answer: "Luffy",
  },

  {
    question: "Who is the right hand of Strawhat Luffy? ",
    answer: "Zoro",
  },

  {
    question:
      "Which island must be reached in order to become the pirate king?",
    answer: "Laugh Tale",
  },

  {
    question:
      "Who promised that he would never lose another fight until he defeats a certain someone? ",
    answer: "Zoro",
  },

  {
    question: "Who gave Shanks the scar on his eye? ",
    answer: "Blackbeard",
  },
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log(
    "Welcome " +
      userName +
      " to the quiz App of- One Piece Anime. " +
      " The Questions are :- "
  );
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("Check out the High Scores :");

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
