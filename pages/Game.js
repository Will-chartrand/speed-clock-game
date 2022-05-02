import { useState } from "react";

var clock = '/clock.png'
var hours = String(Math.floor(Math.random() * 12) + 1);
var minutes = ("00" + String(Math.floor(Math.random() * 60))).slice(-2);

var answer = hours.concat(minutes);
var textAnswerCorrect = " ";

var degree = 0;

function Game() {
  // Declare a new state variable, which we'll call "count"
  var [input, setInput] = useState('');
  var [userScore, setUserScore] = useState(0);
  var [highScore, setHighScore] = useState(0);

  function checkAnswer() {
    if (document.getElementById('inputBox').value.length == answer.length) {  // If the input's length matches the length of the answer string
      console.log(parseInt(answer) - parseInt(document.getElementById('inputBox').value));
      if (Math.abs(parseInt(answer) - parseInt(document.getElementById('inputBox').value)) < 3) { // If the input is the same as the desired answer
        textAnswerCorrect = "Correct!!";
        userScore += 1;
        setUserScore(userScore);  // Increment user's score by one

      } else {
        textAnswerCorrect = "Not correct :(";
        if (userScore > highScore) {  // Set new high score if user exceeded previous high score
          highScore = userScore;
          setHighScore(highScore);
          textAnswerCorrect = "New High Score!";
        } else {
          textAnswerCorrect = "";
        }
        setUserScore(0); // Set user's score back to zero
      }

      //Set times
      hours = String(Math.floor(Math.random() * 12) + 1);
      minutes = ("00" + String(Math.floor(Math.random() * 60))).slice(-2); // Make sure minutes string always has two characters, fill with zeroes if needed
      // Set answer
      answer = hours.concat(minutes);
      // Clear input box
      document.getElementById('inputBox').value = "";

    }
  }

  degree += 10;
  //document.querySelector("#hourHand").setAttribute('style', 'transform: rotate(' + (degree) + 'deg)');
  //document.querySelector("#minuteHand").setAttribute('style', 'transform: rotate(' + (degree) + 'deg)');


  // Set the clock hands to the proper positions
  function updateHands() {
    document.querySelector("#hourHand").setAttribute('style', 'transform: rotate(' + (parseInt(hours) * (360 / 12) + (minutes / 2)) + 'deg)'); // Calculate degree of hour hand (accounting for position of minute hand)
    document.querySelector("#minuteHand").setAttribute('style', 'transform: rotate(' + (parseInt(minutes) * (360 / 60)) + 'deg)'); // Calculate degree of minute hand
  }

  // Set the clock image to the specified clock image
  function setClock(clockName) {
    document.querySelector("#clockBody").src = clockName; // Set the clock name to string argument given
  }

  if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
      updateHands();
      setClock('clock.png');
    });
  }

  return (
    <div>
      <div id='clock'>
        <img id='clockBody' class="clockBody" src={clock} alt='clock'></img>
        <img id="hourHand" class="clockHand" src='hourHand.png' alt='hand'></img>
        <img id="minuteHand" class="clockHand" src='minuteHand.png' alt='hand'></img>
      </div>

      <center>
        <input id="inputBox" type="text" value={input} onChange={e => { checkAnswer(); updateHands(); setInput(e.currentTarget.value); }} />
        <br></br>
        <br></br>
        <p>Score: {userScore}   Highscore: {highScore}</p>
        {/* <p>answer is {answer}</p> */}
        <p>{textAnswerCorrect}</p>
        {/* <p>input: {input}</p> */}

        <br></br>
        <br></br>

        <button onClick={setClock('clock-numbers.png')} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          Numbers
        </button>
        <button onClick={setClock('clock.png')} className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          No Numbers
        </button>

      </center>

    </div>
  );
}

export default Game;