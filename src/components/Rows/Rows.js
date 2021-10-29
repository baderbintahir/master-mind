import React, { useState } from "react";
import Row from "./Row/Row";

import "./Rows.css";

const Rows = (props) => {
  const [selectedRow, setSelectedRow] = useState(1);

  const changeRow = (win) => {
    if(selectedRow === 9){
      alert('You lost!!!')
    }
    
    if (win) {
      setSelectedRow(-100);
    } else {
      setSelectedRow(selectedRow + 1);
    }
  };

  return (
    <div className="rows">
      {[...Array(9)].map((e, i) => (
        <Row
          key={i}
          rowNumber={i + 1}
          selectedColor={props.selectedColor}
          selectedRow={selectedRow}
          changeRow={changeRow}
        />
      ))}
    </div>
  );
};

export default Rows;
