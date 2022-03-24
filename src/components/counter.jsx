import React, { useEffect, useState } from "react";

function Counter() {
  const [isGameOver, setIsGameOver] = useState(false);
  const gameOver = () => {
    setIsGameOver(true);
    setFeedback(
      `You guessed the number in ${guessNo} ${
        guessNo === 1 ? "guess" : "guesses"
      }!`
    );
  };

  const [target, setTarget] = useState(-1);
  const newGame = () => {
    let target = Math.ceil(Math.random() * 20);
    console.log(target);
    setTarget(target);
    setFeedback("");
    setIsGameOver(false);
    setGuessNo(1);
    document.getElementById("guess").value = "";
  };

  const [guessNo, setGuessNo] = useState(1);
  const makeGuess = () => {
    if (isGameOver) return; // don't allow guesses once game is over

    let guess = parseInt(document.getElementById("guess").value);

    if (guess === target) {
      gameOver();
    } else if (guess < target) {
      setFeedback("Guess was too low. Please try again.");
    } else if (guess > target) {
      setFeedback("Guess was too high. Please try again.");
    }
    setGuessNo(guessNo + 1);
  };

  const getFeedbackColor = () => {
    return isGameOver ? "white" : "warning";
  };

  const [feedback, setFeedback] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      setPageLoaded(true);
      newGame();
    }
  }, [pageLoaded]);

  return (
    <div className="d-flex flex-column text-center bg-dark p-3">
      <p className="h2 text-white bg-dark">Enter a number 1-20</p>
      <div className="d-flex flex-row">
        <div className="p-1">
          <input
            type="number"
            className="form-control"
            id="guess"
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                makeGuess();
              }
            }}
          ></input>
        </div>
        <div className="p-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              makeGuess();
            }}
          >
            Guess
          </button>
        </div>
      </div>
      <div className="container">
        <p className={`text-${getFeedbackColor()}`}>
          {feedback}
          <br />
          {isGameOver && `Click 'New Game' to start a new game.`}
        </p>
      </div>
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={newGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default Counter;
