import { useEffect, useState } from "react";
import Board from "../components/Board";
import Controls from "../components/Controls";

export default function RandomGame() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  useEffect(() => {
    fetch("https://threeinarow-api.onrender.com/threeinarow/random")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load random game");
        }
        return res.json();
      })
      .then((json) => {
        console.log("Random Game Data:", json);
        setData(json);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Could not load random game.");
      });
  }, []);

  if (!data) {
    return <p>Loading random game...</p>;
  }

  return (
    <div className="game-page">
      <h2>Random Grid</h2>

      <Controls
        data={data}
        setMessage={setMessage}
        showErrors={showErrors}
        setShowErrors={setShowErrors}
      />

      <p id="message">{message}</p>

      <Board
        data={data}
        setData={setData}
        showErrors={showErrors}
      />
    </div>
  );
}