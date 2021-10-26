import { useState } from 'react';
import './Rules.css';

function Rules() {
    const [showRules, setShowRules] = useState(false)

    const handleShowRules = () => {
        setShowRules(!showRules)
    }

    return (
        <div className="rules">
            <span className="rules-btn" onClick={handleShowRules}>
                {showRules ? 'Hide Rules' : 'Show Rules'}
            </span>

            <p className={`rules-desc ${showRules ? 'display' : ''}`}>
                Try to guess the pattern, in both order and color, within ten turns. 
                After submitting a row, a small black peg is placed for each code peg 
                from the guess which is correct in both color and position. A white peg 
                indicates the existence of a correct color code peg placed in the wrong position. More info on 
                <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.
            </p>
        </div>
    );
}

export default Rules;
