import { useState } from 'react';
import ColorPalette from '../ColorPalette/ColorPalette';
import Rows from '../Rows/Rows';
import './GameBoard.css';

function GameBoard() {
  const [selectedColor, setSelectedColor] = useState(0)

  const handleChangeSelection = e => {
    setSelectedColor(e.target.id.slice(-1))
  }

  return (
    <div className="game-board">
      <ColorPalette 
        selectedColor={selectedColor}
        handleClick={handleChangeSelection}
      />
      <Rows selectedColor={selectedColor}/>
    </div>
  );
}

export default GameBoard;
