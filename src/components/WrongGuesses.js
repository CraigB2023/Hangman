import React from "react";

function WrongGuesses({ wrongGuess, maxWrongGuess }) {
  return (
    <div>
      Wrong guesses: {wrongGuess} of {maxWrongGuess}
    </div>
  );
}

export default WrongGuesses;
