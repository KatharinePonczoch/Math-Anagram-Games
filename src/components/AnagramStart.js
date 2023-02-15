import React from "react";

import { Link } from "react-router-dom";
import WordLength from "./WordLength";

function AnagramStart(props) {
  const wordLengths = [5, 6, 7, 8];

  return (
    <main>
      <div className="container bg-light p-2 border">
        <h1>Anagram Hunt</h1>
        <br />
        <WordLength
          currentValue={props.wordLength}
          setCurrentValue={props.setWordLength}
          values={wordLengths}
        />
        <br />
        <ul>
          <li>1. Choose Word Length </li>
          <li>2. Press Play!</li>
          <li>3. How many anagrams can you find in a minute?</li>
        </ul>
        <br /> <br />
        <Link
          className="btn btn-primary form control btn-block"
          to="/AnagramGame"
        >
          Play!
        </Link>
      </div>
    </main>
  );
}

export default AnagramStart;
