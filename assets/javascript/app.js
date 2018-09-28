// We're going to have a start page that has the title of the game and a start button. A user clicks the button and the game starts
// We'll need an on.click event to bring up the 1st question

// From there we're going to have 8 questions and they'll display as such:
// Timer counting down
// Question
// choices -- these choices will have hover effects and will record a click and make a decision as to what to show the user on the next page (i.e. right answer or wrong answer). a little gif would be nice.

// At the end, we show a screen that shows how many were right and how many were wrong. Would be cool to have an if statement that shows different ranks.

// PSUEDO-CODE
// 1. Write up HTML -- we'll have an h1 tag for the title of the quiz. After that, let's just make divs/spans for different elements of the quiz. Think of it as one page that's going to change elements continually after user input.
// 2. Javascript -- Here's things we'll need to figure out:
// initialize variables
// code the timer
// define on click events when buttons are clicked
// jQuery will take care of grabbing and writing to the DOM
// perhaps make each question an object? properties could be correct and wrong answers so that it could look like question.correctAnswer or question.wrongAnswer
// need to think about where it makes sense for functions. Function could hold the process for determining if user guess is correct. Could be something like
// $(".choice").on("click", userChoice)
//
// function userChoice(){
// if (question.correctAnswer){
// display winning text
// display little gif
// give countdown timer toward next question
// } else if (question.wrongAnswer) {
// display losing text
// display gif
// give countdown toward next question
// }
// }
// We'll also need a validator boolean variable, something like isQuestion8 = true, then show last page results.
// We'll need to store the number of correct guesses and display that, as well as wrong guesses.
// CHALLENGE: try to display text that uses if/else statement to give a ranking.
// =========================================================================================================================

var triviaQuestions = {
  questionOne: {
    question: "What is Homer's favorite food?",
    correctAnswer: "Donut",
    wrongAnswer: ["Chili", "Pizza", "Krusty Burger", "Donut"],
    gif: "./assets/images/HomerDonut.gif"
  },
  questionTwo: {
    question: "Bart's favorite celebrity is...",
    correctAnswer: "Krusty the Klown",
    wrongAnswer: ["Rainier Wolfcastle", "Troy McClure", "Bleeding Gums Murphy"],
    gif: "../images/KrustyHell.gif"
  },
  questionThree: {
    question:
      "Lisa Simpson views this male character more as a big sister, than as a love interest.",
    correctAnswer: "Milhouse Van Houten",
    wrongAnswer: ["Ralph Wiggum", "Nelon Muntz", "Rod Flanders"],
    gif: "../images/milhouseEyebrows.gif"
  },
  questionFour: {
    question: "Marge once was addicted to...",
    correctAnswer: "Gambling",
    wrongAnswer: ["Marijuana", "Shopping", "Chocolate"],
    gif: "../images/margeSlots.gif"
  },
  questionFive: {
    question: "What is Homer's brother's name?",
    correctAnswer: "Herb Simpson",
    wrongAnswer: ["Jay Simpson", "Donald Sampson", "Abe Simpson"],
    gif: "../images/herb.gif"
  },
  questionSix: {
    question: "What is the name of Homer's barbershop quartet?",
    correctAnswer: "The Be-Sharps",
    wrongAnswer: ["The Beetles", "Baby on Board", "Grand Funk"],
    gif: "../images/besharp.gif"
  },
  questionSeven: {
    question: "Lisa develops a crush on which of her substitute teachers?",
    correctAnswer: "Mr. Bergstrom",
    wrongAnswer: ["Ned Flanders", "Principal Skinner", "Jasper Beardly"],
    gif: "./images/LisaCry.gif"
  },
  questionEight: {
    question:
      "Which famous baseball player steals Homer's starter spot on the Springfield Nuclear Power Plant softball team?",
    correctAnswer: "Darryl Strawberry",
    wrongAnswer: ["Wade Boggs", "Jose Canseco", "Ken Griffey Jr."],
    gif: "../images/darryl.gif"
  }
};

var correctGuesses = 0;
var incorrectGuesses = 0;
var isQuestion8 = false;
var gameFinish = false;

$("button").on("click", function() {
  $("button").empty();
  $(".question").text(triviaQuestions.questionOne.question);
  $("#choice1").text(triviaQuestions.questionOne.correctAnswer);
  $("#choice2").text(triviaQuestions.questionOne.wrongAnswer[0]);
  $("#choice3").text(triviaQuestions.questionOne.wrongAnswer[1]);
  $("#choice4").text(triviaQuestions.questionOne.wrongAnswer[2]);
});

$("#choice1").on("click", function() {
    console.log("you did it");
    $("#verdict").text("WOO-HOO! You're right!");
    $("#gif").html(
      "<img src=" + triviaQuestions.questionOne.gif + " width='400px'>"
    );
    correctGuesses += 1;
    console.log(correctGuesses);
    $(".choice").empty();
    $(".question").empty();
  });

  $("#choice4" || "#choice2" || "#choice3").on("click", function() {
    console.log("you did it");
    $("#verdict").text("D'OH! You're wrong!");
    $("#gif").html(
      "<img src=" + triviaQuestions.questionOne.gif + " width='400px'>"
    );
    incorrectGuesses += 1;
    console.log(incorrectGuesses);
    $(".choice").empty();
    $(".question").empty();
  });




//   else if (triviaQuestions.questionOne.wrongAnswer) {$("#verdict").text("D'OH! You're wrong!");
//   $("#gif").html(
//     "<img src=" + triviaQuestions.questionOne.gif + " width='400px'>"
//   );
//   incorrectGuesses += 1;
//   console.log(incorrectGuesses);

//   }
// });
