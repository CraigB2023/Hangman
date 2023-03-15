// I used this tutorial as a starting point: https://www.youtube.com/watch?v=82-Gnw-rBiQ
// The Keyboard idea, WrongGuesses, GuessedWord, handleGuess and styling /structure of the page are from the tutorial
// The tutorial used a Class but i wanted to use Hooks. I converted it to hooks and components.

import React, { useState } from "react";
import "./Hangman.css";
import { randomWord } from "./WordList.js";
import Header from "./Header";
import WrongGuesses from "./WrongGuesses";
import Image from "./Image";
import GuessWord from "./GuessWord";
import Keyboard from "./Keyboard";
import Reset from "./Reset";
import Modal from "./Modal";

const Hangman = () => {
  const [wrongGuess, setWrongGuess] = useState(0); // set default state of wrongGuess to zero
  const [guessed, setGuessed] = useState(new Set()); // All guessed letters added here - hence Set();
  const [word, setWord] = useState(randomWord()); // Select a new 'word' from the list 

  const maxWrongGuess = 10; // 10 wrong guesses

  const guessedWord = () => {
    return word
      .split("") // split out the letters in the word
      .map((letter) => (guessed.has(letter) ? letter : " _ ")); // map through each letter - if guessed set has the letter then show letter else show blank (" _ ")
  };

  const handleGuess = (e) => { // letter onclick event
    const letter = e.target.value; // value is the letter
    setGuessed((prevGuessed) => new Set(prevGuessed.add(letter))); // make a new set, take the current state and add the letter
    setWrongGuess(
      (prevWrongGuess) => prevWrongGuess + (word.includes(letter) ? 0 : 1) // if the word includes the letter add nothing else add one.
    );
  };

  const resetButton = () => {
    setWrongGuess(0); // set state of WrongGuess back to zero
    setGuessed(new Set()); // set guessed letters to a new blank set()
    setWord(randomWord()); // set word state to a new random word
  };

  const gameOver = wrongGuess >= maxWrongGuess; // true / false: the game is over when wrongGuess count = maxWrongGuess
  const winner = guessedWord().join("") === word; // true / false: join all the letters in guessword if there are no blanks it will equal the word and the game is won 
 
  return (
    <div className="hangman container">
      <Header />
      <Modal /><Reset resetButton={resetButton} /> {/*pass as prop the resetButton function variable*/}

      <WrongGuesses wrongGuess={wrongGuess} maxWrongGuess={maxWrongGuess} /> {/*pass wrongGuess count and maxWrongGuess as props to be displayed*/}
      <Image wrongGuess={wrongGuess} /> {/*pass wrongGuess count to image component to display*/}
      <div className="text-center">
        {/*pass as props gameOver true/false, the word and the guessed letter set*/}
        <GuessWord gameOver={gameOver} word={word} guessed={guessed} />
        <p>
          {/*if winner is true, display win text, else if gameover is true, display lost text else show keyboard and keep guessing*/}
          {winner ? (
            "Congratulations, you won."
          ) : gameOver ? (
            "You lost. Play again?"
          ) : (
            <Keyboard guessed={guessed} handleGuess={handleGuess} /> //pass all guessed letters as prop for creating letter buttons and handleGuess variable function for onClick
          )}
        </p>
      </div>
    </div>
  );
};

export default Hangman;
