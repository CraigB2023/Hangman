function Keyboard({ handleGuess, guessed }) {
  // split alphabet and map through each letter to create the keys
  return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
    <button
      className="btn btn-lg btn-primary m-2" //bootstrap button styling
      key={letter} // each map item must have a key
      value={letter} // the value is the letter
      onClick={handleGuess} // call handleGuess variable function on click
      disabled={guessed.has(letter)} // if letter has already been guessed disable button
    >
      {letter}
    </button>
  ));
}

export default Keyboard;
