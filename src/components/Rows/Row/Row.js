import React, { useState } from 'react'
import ColorCircle from '../../ColorCircle/ColorCircle'

import './Row.css'

function Row(props) {
    let startingId = props.rowNumber * 100
    let selectedRow = props.rowNumber === props.selectedRow
    const [clicked, setClicked] = useState([-1, -1, -1, -1])
    const handleClick = e => {
        let x = [].concat(clicked)
        x[e.target.id.slice(-3) - startingId] = props.selectedColor
        setClicked(x)
    }

    let circles = []
    for (let i = startingId; i < startingId + 4; i++) {
        circles.push(<ColorCircle id={`c-${i}`} key={i} class={clicked[i - startingId]} selectedRow={selectedRow} handleClick={handleClick} />)
    }

    return (
        <div className={`row ${selectedRow ? 'selected-row' : null}`}>
            <div className="circles">
                {circles}
            </div>

            <button
                className={`submit ${!clicked.includes(-1) ? 'display' : null}`}
                onClick={props.handleSubmit}
            ></button>

            <div className="hints">
                <span className="hint"></span>
                <span className="hint"></span>
                <span className="hint"></span>
                <span className="hint"></span>
            </div>
        </div>
    )
}

export default Row
