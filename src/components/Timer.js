import React, { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    console.log("Starting timer.");
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <strong>Time Left: {timeLeft}</strong>;
}
export default Timer;
