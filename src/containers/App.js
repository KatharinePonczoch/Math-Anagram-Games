import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MathGame from "../components/MathGame";
import MathStart from "../components/MathStart";
import AnagramStart from "../components/AnagramStart";
import AnagramGame from "../components/AnagramGame";

function App() {
  const [operation, setOperation] = useState("-");
  const [maxNumber, setMaxNumber] = useState(10);
  const [wordLength, setWordLength] = useState(6);
  const [gameWord, setGameWord] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route
          path="/MathStart"
          element={
            <MathStart
              operation={operation}
              setOperation={setOperation}
              maxNumber={maxNumber}
              setMaxNumber={setMaxNumber}
            />
          }
        />

        <Route
          path="/MathGame"
          element={<MathGame operation={operation} maxNumber={maxNumber} />}
        />

        <Route
          path="/AnagramStart"
          element={
            <AnagramStart
              wordLength={wordLength}
              setWordLength={setWordLength}
            />
          }
        />

        <Route
          path="/AnagramGame"
          element={
            <AnagramGame
              wordLength={wordLength}
              gameWord={gameWord}
              setGameWord={setGameWord}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
