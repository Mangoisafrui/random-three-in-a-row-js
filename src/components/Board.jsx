import Square from "./Square";
export default function Board({ data, setData, showErrors }) {
  function handleClick(rowIndex, colIndex) {
    const updatedData = structuredClone(data); 
    const cell = updatedData.rows[rowIndex][colIndex];

    if (!cell.canToggle) {
      return;
    }

    cell.currentState = (cell.currentState + 1) % 3;

    setData(updatedData);
  }

  return (
    <div className="board">
      {data.rows.map((row, rowIndex) => ( //Mapping data
        <div className="board-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              showErrors={showErrors}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}