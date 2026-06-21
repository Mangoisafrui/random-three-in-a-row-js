export default function Controls({
  data,
  setMessage,
  showErrors,
  setShowErrors,
}) {
  function checkPuzzle() {
    const allCells = data.rows.flat();

    const isComplete = allCells.every(
      (cell) => cell.currentState !== 0
    );

    const isCorrect = allCells.every(
      (cell) => cell.currentState === cell.correctState
    );

    if (isComplete && isCorrect) {
      setMessage("Puzzle is complete and correct!");
    } else if (!isCorrect) {
      setMessage("There are incorrect squares.");
    } else {
      setMessage("So far so good.");
    }
  }

  return (
    <div className="controls">
      <button onClick={checkPuzzle}>Check Puzzle</button>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={showErrors}
          onChange={(event) => setShowErrors(event.target.checked)}
        />
        Show incorrect squares
      </label>
    </div>
  );
}