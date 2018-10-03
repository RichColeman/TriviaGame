// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
setTimeout(fiveSeconds, 5000);

//  after 10 seconds, execute the tenSeconds function
setTimeout(tenSeconds, 10000);

//  after 15 seconds, execute the timeUp function
setTimeout(timeUp, 15000);

// ---------------------
// CODE STEP TWO HERE
// ---------------------

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  console.log("10 seconds left");
  $("#time-left").html("<h2>About 10 Seconds Left!</h2>")
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  console.log("5 seconds left")
  $("#time-left").html("<h2>About 5 Seconds Left!</h2>")

}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").html('<h2>Time is Up!</h2> <br> <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-anchorman-the-legend-of-ron-burgundy-will-ferrell.jpg" alt="Ron">')




  // The following line will play the audio file above
  audio.play();
}
