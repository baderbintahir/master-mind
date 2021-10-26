import ColorPalette from '../ColorPalette/ColorPalette';
import Rows from '../Rows/Rows';
import './GameBoard.css';

function GameBoard() {
  return (
    <div className="game-board">
      <ColorPalette />
      <Rows />
    </div>
  );
}

export default GameBoard;
