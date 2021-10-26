import React from 'react'
import ColorCircle from '../../ColorCircle/ColorCircle'

import './Row.css'

function Row(props) {
    return (
        <div className={`row ${props.class}`}>
            <div className="circles">
                <ColorCircle id={"one"}/>
                <ColorCircle id={"two"}/>
                <ColorCircle id={"three"}/>
                <ColorCircle id={"four"}/>
            </div>

            <button className={`submit`}></button>

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
