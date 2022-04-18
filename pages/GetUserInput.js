import react, { useState } from "react";

function GetUserInput() {
    // Declare a new state variable, which we'll call "count"
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    var answer = "1234"

    function checkAnswer () {
      if(input == answer) {
        alert("fuckshit!!!!!");
      }
      setInput('');
    }
    return (
      <div>
        <center>
          <p>input is {input}</p>
          
          <input
            type="text"
            value={input}
            onChange={e => {checkAnswer(); setInput(e.currentTarget.value);}
          }
          />
        </center>
      </div>
    );
  }

  export default GetUserInput;