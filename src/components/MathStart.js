import React from "react";
import SelectInput from "./SelectInput";
import { Link } from "react-router-dom";
import "./MathGame.css";
// import "./Main.css";

function MathStart(props) {
  const operations = [
    ["Addition", "+"],
    ["Subtraction", "-"],
    ["Multiplication", "x"],
    ["Division", "/"],
  ];
  const numbers = [];
  for (let number = 2; number <= 20; number++) {
    numbers.push([number, number]);
  }

  return (
    <main>
      <div className="container bg-light p-2 border">
        <h1>Math Facts</h1>

        <div className="row mx-1 my-3">
          <SelectInput
            label="Operation"
            id="Operation"
            currentValue={props.operation}
            setCurrentValue={props.setOperation}
            values={operations}
          />
        </div>
        <div className="row mx-1 my-3">
          <SelectInput
            currentValue={props.maxNumber}
            setCurrentValue={props.setMaxNumber}
            label="Maximum Number"
            values={numbers}
          />
        </div>
        <br />
        <div>
          <Link className="btn btn-success form control" to="/MathGame">
            Go!
          </Link>
        </div>

        <br />
        <ul>
          <li>1. Choose Operation</li>
          <li>2. Choose Max Number</li>
          <li>3. Press Go</li>
          <li>4. How many problems can you solve in 30 seconds?</li>
        </ul>
      </div>
    </main>
  );
}

export default MathStart;
