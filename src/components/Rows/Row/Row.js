import React, { useState } from "react";
import ColorCircle from "../../ColorCircle/ColorCircle";

import "./Row.css";

const Row = (props) => {
  const [selectionArr, setSelectionArr] = useState([-1, -1, -1, -1]);
  const [hintClasses, setHintClasses] = useState([]);

  const startingId = props.rowNumber * 100;
  const selectedRow = props.rowNumber === props.selectedRow;

  const handleClick = (e) => {
    const updatedArray = [...selectionArr];
    updatedArray[e.target.id.slice(-3) - startingId] = Number(props.selectedColor)
    setSelectionArr(updatedArray);
  };

  const handleSubmit = () => {
    let currentSelection = [...selectionArr];
    let winningPattern = [1, 3, 5, 0];
    let exactMatches = 0;
    let copyHintClasses = [];

    // checking for exact colors
    for (let i = 0; i < currentSelection.length; i++) {
      if (winningPattern[i] === currentSelection[i]) {
        exactMatches++;
        copyHintClasses.push("exact");
        winningPattern.splice(i, 1);
        currentSelection.splice(i, 1);
        i--;
      }
    }

    // checking for right colors at wrong place
    currentSelection.forEach((selectedColor, i) => {
      selectedColor = Number(selectedColor);
      if (winningPattern.includes(selectedColor)) {
        copyHintClasses.push("right");
        const matchingIndex = winningPattern.indexOf(selectedColor);
        winningPattern.splice(matchingIndex, 1);
      }
    });

    // wrong colors
    winningPattern.forEach(() => {
      copyHintClasses.push("wrong");
    });

    setHintClasses(copyHintClasses);

    if (exactMatches === 4) {
      alert("You won!!!");
      props.changeRow(true);
    } else {
      props.changeRow(false);
    }
  };

  return (
    <div className={`row ${selectedRow ? "selected-row" : null}`}>
      <div className="circles">
        {[...Array(4)].map((e, i) => (
          <ColorCircle
            id={`c-${i + startingId}`}
            key={i}
            class={selectionArr[i]}
            selectedRow={selectedRow}
            handleClick={handleClick}
          />
        ))}
      </div>

      <button
        className={`submit ${!selectionArr.includes(-1) ? "display" : null}`}
        onClick={handleSubmit}
        disabled={!selectedRow}
      ></button>

      <div className="hints">
        {[...Array(4)].map((e, i) => (
          <span
            key={i}
            className={`hint hint-${hintClasses[i] ? hintClasses[i] : "null"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Row;
