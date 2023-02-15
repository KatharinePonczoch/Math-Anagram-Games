import React from "react";
// import PlayButton from "./PlayButton";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main>
      {/* <div className="container d-inline-flex bg-light border border-secondary"> */}
      <div className="container d-inline-flex ">
        {/* <div className="p-2 border gameChoice"> */}
        <div className="p-3 border w-50 m-1">
          <h1>Anagram Hunt</h1>
          <br />
          <p>
            Do you like Scrabble? Words with friends? Improve how fast you can
            recognize anagrams in a word with this neat little game!
          </p>
          <div id="choiceFooter">
            <br />
            <Link to="/AnagramStart" className="btn btn-success form control">
              Play
            </Link>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="p-2 border gameChoice"> */}
        <div className="p-3 border w-50 m-1">
          <h1>Math Facts</h1> <br />
          <p>Improve your mental math skills with this exciting game! </p>
          <div id="choiceFooter">
            <br />
            <Link className="btn btn-success form control" to="/MathStart">
              Play
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
    </main>
  );
}

export default Main;
