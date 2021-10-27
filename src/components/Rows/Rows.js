import React from 'react'
import Row from './Row/Row'

import './Rows.css'

function Rows(props) {
    let rows = []
    for (let i = 1; i < 10; i++) {
        rows.push(<Row key={i} rowNumber={i} selectedColor={props.selectedColor}/>)
    }

    return (
        <div className="rows">
            {rows}
        </div>
    )
}

export default Rows
