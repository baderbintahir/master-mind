import React, { useState } from 'react'
import Row from './Row/Row'

import './Rows.css'

function Rows(props) {
    const [selectedRow, setSelectedRow] = useState(1)
    
    const handleSubmit = (selectionArr) => {
        let winningPattern = ['1', '3', '5', '0']
        let win = true
        setSelectedRow(selectedRow + 1)

        for (let i = 0; i < selectionArr.length; i++) {
            if(selectionArr[i] !== winningPattern[i]){
                win = false
            }            
        }
         
        if(win){
            alert("You won!!!")
            setSelectedRow(0)
        }
    }

    let rows = []
    for (let i = 1; i < 10; i++) {
        rows.push(<Row key={i} rowNumber={i} selectedColor={props.selectedColor} selectedRow={selectedRow} handleSubmit={handleSubmit}/>)
    }

    return (
        <div className="rows">
            {rows}
        </div>
    )
}

export default Rows
