import React, { useState } from 'react'
import Row from './Row/Row'

import './Rows.css'

function Rows(props) {
    const [selectedRow, setSelectedRow] = useState(1)

    const changeRow = () => {
        setSelectedRow(selectedRow + 1)
    }

    let rows = []
    for (let i = 1; i < 10; i++) {
        rows.push(<Row
                    key={i} 
                    rowNumber={i} 
                    selectedColor={props.selectedColor} 
                    selectedRow={selectedRow} 
                    changeRow={changeRow}
                />)
    }

    return (
        <div className="rows">
            {rows}
        </div>
    )
}

export default Rows
