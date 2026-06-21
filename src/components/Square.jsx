export default function Square({ cell, onClick, showErrors }) {
  function getSquareClass() {
    switch (cell.currentState) {
      case 0:
        return "empty";
      case 1:
        return "blue";
      case 2:
        return "white";
      default:
        return "empty";
    }
  }

  const showErrorClass =
    showErrors &&
    cell.currentState !== 0 &&
    cell.currentState !== cell.correctState;

  return (
    <div
      className={`square ${getSquareClass()} ${
        cell.canToggle ? "" : "locked"
      } ${showErrorClass ? "error" : ""}`}
      onClick={cell.canToggle ? onClick : undefined}
    ></div>
  );
}