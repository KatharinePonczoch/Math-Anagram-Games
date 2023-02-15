import React, { useState } from "react";
import { Link } from "react-router-dom";
import Score from "./Score";
import Timer from "./Timer";
import Equation from "./Equation";
import Keyboard from "./Keyboard";
import ClearButton from "./ClearButton";
import { randInt } from "../Helpers/Helpers";
import NumberButton from "./NumberButton";
import "./MathGame.css";

function MathGame({ operation, maxNumber }) {
  let randNums = getRandNumbers(operation, 0, maxNumber);
  const [operands, setOperands] = useState(randNums);
  const question = operands.num1 + " " + operation + " " + operands.num2;

  const [userAnswer, setUserAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const gameLength = 30; // Seconds
  const [timeLeft, setTimeLeft] = useState(gameLength);

  function appendToAnswer(num) {
    // Number() will remove leading zeroes
    setUserAnswer(String(Number(userAnswer + num)));
  }

  function checkAnswer(userAnswer) {
    if (isNaN(userAnswer)) return false; // User hasn't answered

    let correctAnswer;
    switch (operation) {
      case "+":
        correctAnswer = operands.num1 + operands.num2;
        break;
      case "-":
        correctAnswer = operands.num1 - operands.num2;
        break;
      case "x":
        correctAnswer = operands.num1 * operands.num2;
        break;
      default: // division
        correctAnswer = operands.num1 / operands.num2;
    }
    return parseInt(userAnswer) === correctAnswer;
  }

  if (!answered && checkAnswer(userAnswer)) {
    setAnswered(true);
    setScore(score + 1);
    setTimeout(newQuestion, 300);
  }

  function newQuestion() {
    setUserAnswer("");
    setAnswered(false);
    randNums = getRandNumbers(operation, 0, maxNumber);
    setOperands(randNums);
  }

  function getRandNumbers(operator, low, high) {
    console.log("randNumbers");
    let num1 = randInt(low, high);
    let num2 = randInt(low, high);
    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);

    if (operator === "-") {
      // Make sure higher num comes first
      num1 = numHigh;
      num2 = numLow;
    }

    if (operator === "/") {
      if (num2 === 0) {
        // No division by zero
        num2 = randInt(1, high);
      }
      num1 = num1 * num2; // product
    }
    return { num1, num2 };
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberButtons = numbers.map((number) => (
    <NumberButton value={number} key={number} handleClick={appendToAnswer} />
  ));

  const equationClass = answered
    ? "row my-2 text-primary fade"
    : "row my-2 text-secondary";

  if (timeLeft === 0) {
    return (
      <div
        className="container bg-light border text-center"
        id="game-container"
      >
        <h1>Math Facts</h1>
        <br />
        <h2>Time's Up!</h2>
        <br />
        <strong style={{ fontSize: "1.5em" }}>Your Final Score is</strong>
        <div style={{ fontSize: "4em" }}>{score}</div>
        <br />
        <div>
          <Link className="btn btn-success form control" to="/MathStart">
            Play Again
          </Link>
        </div>

        <br />
        <div>
          <Link
            className="btn btn-secondary form control"
            to="/Math-Anagram-Games/"
          >
            Back to Start Screen
          </Link>
        </div>

        <br />
        <br />
      </div>
    );
  }

  return (
    <main className="container bg-light border" id="game-container">
      <h1>Math Facts</h1>
      <br />
      {/* <p>operation: {operation}</p> */}
      <div className={equationClass} id="equation">
        <Equation question={question} answer={userAnswer} />
      </div>
      <br />
      <div className="row" id="buttons">
        <div className="col">
          {numberButtons}
          <ClearButton handleClick={setUserAnswer} />
        </div>
      </div>
      <Keyboard setUserAnswer={setUserAnswer} />
      <div className="row border-bottom" style={{ fontSize: "1.5em" }}>
        <div className=" px-3">
          <Score score={score} />
        </div>
        <br />
        <div className=" px-3">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          <p></p>
        </div>
      </div>
    </main>
  );
}
export default MathGame;
