import React, { useState } from "react";
import { Link } from "react-router-dom";
import Score from "./Score";
import Timer from "./Timer";
import Data from "./Data";

// initialize game with chosen wordlength
function AnagramGame({ wordLength }) {
  const anagrams = Data;
  const gameLength = 60;
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(gameLength);
  const [gameData, setGameData] = useState(AnaGameSetup(anagrams[wordLength]));

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //get new word and create new game data arrays
  function AnaGameSetup(newWdLngthArray) {
    const wdLngthArray = [...newWdLngthArray];
    const randRowNum = getRandomInt(wdLngthArray.length);
    const randRow = wdLngthArray[randRowNum];
    const randWordInRowNum = getRandomInt(randRow.length);
    const gameWord = randRow[randWordInRowNum];
    // setAnswered(false);
    const possibleWords = randRow.filter((item) => item !== gameWord);
    const guessedWords = [];

    return {
      wdLngthArray,
      randRowNum,
      randRow,
      randWordInRowNum,
      gameWord,
      possibleWords,
      guessedWords,
    };
  }

  // catches keystrokes and compares to see if guess is in possible words array
  const handleGuess = (event) => {
    const guessedWord = event.target.value;
    // console.log(guessedWord);

    const foundWord = gameData.possibleWords.find(
      (item) => guessedWord === item
    );
    console.log("foundWord", foundWord);

    // update game data arrays, increment score, decrement possible words, add guessed words below
    if (foundWord) {
      // setAnswered(true);
      const newGameData = {
        wdLngthArray: gameData.wdLngthArray,
        randRowNum: gameData.randRowNum,
        randRow: gameData.randRow,
        randWordInRowNum: gameData.randWordInRowNum,
        gameWord: gameData.gameWord,
        possibleWords: gameData.possibleWords.filter(
          (item) => guessedWord !== item
        ),
        guessedWords: [...gameData.guessedWords, guessedWord],
      };

      console.log("new game data = ", newGameData);
      event.target.value = "";

      setScore(score + 1);
      if (newGameData.possibleWords.length === 0) {
        const newArray = gameData.wdLngthArray.filter(
          (item, index) => index !== gameData.randRowNum
        );
        if (newArray.length === 0) {
          alert("You guessed them all! Try again with a different word length");
          setTimeLeft(0);
        } else setGameData(AnaGameSetup(newArray));
      } else setGameData(newGameData);
    }
  };

  if (timeLeft === 0) {
    return (
      <div
        className="container bg-light border text-center"
        id="game-container"
      >
        <h1>Anagram Hunt</h1>
        <br />
        <h2>Time's Up!</h2>
        <br />
        <div>
          <strong style={{ fontSize: "1.5em" }}>You Got </strong>
          <div style={{ fontSize: "5em" }}>{score}</div>
          <strong style={{ fontSize: "1.5em" }}> Anagrams</strong>
        </div>
        <br />
        <div>
          <Link className="btn btn-primary form control" to="/AnagramStart">
            Play Again
          </Link>
        </div>
        <br />
        <div>
          <Link
            className="btn btn-secondary form-control"
            to="/Math-Anagram-Games/"
          >
            Back to Start Screen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="container bg-light p-2 border">
        <h1>Anagram Hunt</h1>
        <div className="row border-bottom" style={{ fontSize: "1.5em" }}>
          <div className="col px-3 text-left">
            <Score score={score} />
          </div>
          <div className="col px-3 text-right">
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft}></Timer>
          </div>
        </div>
        <h5>word length: {wordLength}</h5>
        <br />
        <div>
          <br />
        </div>
        <h1>
          {gameData.gameWord} ({gameData.possibleWords.length} left)
        </h1>{" "}
        <br />
        <div>
          <input type="text" id="anagram-answer" onChange={handleGuess} />
        </div>
        <div>
          <br />
          <ol id="correctGuess">
            correct anagrams:
            {gameData.guessedWords.map((guessedWord) => (
              <li key={guessedWord}>{guessedWord}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
export default AnagramGame;
