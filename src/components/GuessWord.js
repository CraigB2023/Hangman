import React from "react";

function GuessWord({ gameOver, guessed, word }) {
  return (
    <div>
      <p>Guess the word</p>
      <p>
        {!gameOver //if gameOver is not true
          ? word
              .split("") // split word into letters
              .map((letter) => (guessed.has(letter) ? letter : " _ ")) // map through each letter in the word, if guessed set has the letter display it else underscore
          : word /*if game over is true then display the word*/} 
      </p>
    </div>
  );
}

export default GuessWord;
