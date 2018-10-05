// --------- object of trivia questions ----------

var triviaQuestions = [
  {
    question: "What is Homer's favorite food?",
    correctAnswer: 3,
    options: ["Chili ", "Pizza ", "Krusty Burger ", "Donut "],
    gif: "./assets/images/HomerDonut.gif"
  },
  {
    question: "Bart's favorite celebrity is...",
    correctAnswer: 0,
    options: [
      "Krusty The Klown",
      "Rainier Wolfcastle",
      "Troy McClure",
      "Bleeding Gums Murphy"
    ],
    gif: "./assets/images/KrustyHell.gif"
  },
  {
    question:
      "Lisa Simpson views this character more as a big sister, than as a love interest.",
    correctAnswer: 1,
    options: [
      "Ralph Wiggum",
      "Milhouse Van Houten",
      "Nelon Muntz",
      "Rod Flanders"
    ],
    gif: "./assets/images/milhouseEyebrows.gif"
  },
  {
    question: "Marge once was addicted to...",
    correctAnswer: 3,
    options: ["Marijuana", "Shopping", "Chocolate", "Gambling"],
    gif: "./assets/images/margeSlots.gif"
  },
  {
    question: "What is Homer's brother's name?",
    correctAnswer: 2,
    options: ["Jay Simpson", "Donald Sampson", "Herb Simpson", "Abe Simpson"],
    gif: "./assets/images/herb.gif"
  },
  {
    question: "What is the name of Homer's barbershop quartet?",
    correctAnswer: 0,
    options: ["The Be-sharps", "The Beetles", "Baby on Board", "Grand Funk"],
    gif: "./assets/images/besharp.gif"
  },
  {
    question: "Lisa develops a crush on which of her substitute teachers?",
    correctAnswer: 1,
    options: [
      "Ned Flanders",
      "Mr. Bergstrom",
      "Principal Skinner",
      "Jasper Beardly"
    ],
    gif: "./assets/images/LisaCry.gif"
  },
  {
    question:
      "Which famous baseball player steals Homer's starter spot on the Springfield Nuclear Power Plant softball team?",
    correctAnswer: 3,
    options: [
      "Wade Boggs",
      "Jose Canseco",
      "Ken Griffey Jr.",
      "Darryl Strawberry"
    ],
    gif: "./assets/images/darryl.gif"
  }
];

// -------- initializing variables ------ //
var correctGuesses = 0;
var incorrectGuesses = 0;
var questionIndex = 0;
var currentQuestion;
var gameTimer;
var totalGametime;
var isLastQuestion = false;

var audio = new Audio("./assets/images/The Simpsons.mp3");

// --------- FUNCTIONS ------ //

function startGame() {
  // display question
  displayQuestion();
  // set score (correctGuess, incorrectGuesses)
  correctGuesses = 0;
  incorrectGuesses = 0;
}

function startTimer() {
  gameTimer = setInterval(function() {
    $(".timer").text("You've got " + totalGametime + " seconds left!");
    totalGametime--;
    if (totalGametime < 0) {
      $(".timer").empty();
      $(".timer").text("TIME'S UP!");
      endGame();
      clearInterval(gameTimer);
      // $(".timer").empty();
      // showAnswer();
      // $("#verdict").show();
      // $("#verdict").text(
      //   "D'OH! That's wrong! The correct answer is actually: " +
      //     triviaQuestions[questionIndex].options[
      //       triviaQuestions[questionIndex].correctAnswer
          // ]
      // );
      // incorrectGuesses += 1;
      // setTimeout(displayQuestion, 5000);
    }
  }, 1000);
}

function displayQuestion() {
  // clearInterval(gameTimer);
  $(".results").empty();
  $("#gif").empty();
  $("#verdict").empty();
  // $(".timer").empty();
  // startTimer();
  $(".question").text(triviaQuestions[questionIndex].question);
  for (i = 0; i < triviaQuestions[i].options.length; i++) {
    $(".options").append(
      "<div class='option-buttons' data-value='" +
        i +
        "'>" +
        triviaQuestions[questionIndex].options[i] +
        "</div> <br>"
    );
    $(".option-buttons").addClass("btn btn-warning");
  }
}

function showAnswer() {
  $(".question").empty();
  $(".options").empty();
  // $(".timer").empty();
  $("#gif").html(
    "<img src='" + triviaQuestions[questionIndex].gif + "'alt='simpsons gif'>"
  );
}

function endGame() {
  $(".question").empty();
  $(".instructions").empty();
  clearInterval(gameTimer);
  $(".timer").empty();
  $(".options").empty();
  $(".option-buttons").empty();
  $("#gif").empty();
  $("#verdict").empty();
  $(".results").append(
    "All done! <br> You got " + correctGuesses + " right and " + incorrectGuesses +" wrong. Thanks for playing! See how many times you can play this game in an hour... and then try to break that record!"
  );
  correctGuesses = 0;
  incorrectGuesses = 0;
  questionIndex = 0;
  $(".start").show();
}

// --------- EVENT HANDLERS --------- //

$(document).on("click", ".start", function() {
  totalGametime = 90;
  $("button").hide();
  displayQuestion();
  startTimer();
  audio.play();
});

$(document).on("click", ".option-buttons", function() {
  var clickedButton = $(this);
  if (
    parseInt(clickedButton.attr("data-value")) ===
    triviaQuestions[questionIndex].correctAnswer
  ) {
    showAnswer();
    $("#verdict").text("WOO-HOO! You're right!");
    correctGuesses += 1;
    questionIndex += 1;
    if (questionIndex === triviaQuestions.length) {
      console.log("that's it!");
      setTimeout(endGame, 5000);
    } else {
      setTimeout(displayQuestion, 5000);
    }
  } else {
    showAnswer();
    $("#verdict").text(
      "D'OH! That's wrong! The correct answer is actually " +
        triviaQuestions[questionIndex].options[
          triviaQuestions[questionIndex].correctAnswer
        ]
    );
    incorrectGuesses += 1;
    questionIndex += 1;
    if (questionIndex === triviaQuestions.length) {
      console.log("that's it!");
      setTimeout(endGame, 5000);
    } else {
      setTimeout(displayQuestion, 5000);
    }
  }
});
