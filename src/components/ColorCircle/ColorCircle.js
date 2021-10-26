import React from 'react'
import './ColorCircle.css'

function ColorCircle(props) {
    return (
        <div className="color-circle">
            <span className={props.className ? props.className : ''}>
                <input type='radio' id={props.id}/>
                <label htmlFor={props.id}></label>
            </span>
        </div>
    )
}

export default ColorCircle
