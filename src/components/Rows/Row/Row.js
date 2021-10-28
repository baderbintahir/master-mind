import React, { useState } from 'react'
import ColorCircle from '../../ColorCircle/ColorCircle'

import './Row.css'

function Row(props) {
    const [selectionArr, setSelectionArr] = useState([-1, -1, -1, -1])
    const [hintClasses, setHintClasses] = useState([])
    
    let startingId = props.rowNumber * 100
    let selectedRow = props.rowNumber === props.selectedRow

    const handleClick = e => {
        let x = [].concat(selectionArr)
        x[e.target.id.slice(-3) - startingId] = props.selectedColor
        setSelectionArr(x)
    }

    const handleSubmit = () => {
        let currentSelection = [].concat(selectionArr)
        let winningPattern = [1, 3, 5, 0]
        let exactMatches = 0
        let copyHintClasses = []

        // checking for exact colors
        for (let i = 0; i < currentSelection.length; i++) {
            if(winningPattern[i] === Number(currentSelection[i])){
                exactMatches++
                copyHintClasses.push('exact')
                winningPattern.splice(i, 1)
                currentSelection.splice(i, 1)
                i--
            }            
        }

        // checking for right colors at wrong place
        currentSelection.forEach((e, i) => {
            e = Number(e)
            if(winningPattern.includes(e)){
                copyHintClasses.push('right')
                let matchingIndex = winningPattern.indexOf(e)
                winningPattern.splice(matchingIndex, 1)
            }
        });

        // wrong colors
        winningPattern.forEach(() => {
            copyHintClasses.push('wrong')
        })

        setHintClasses(copyHintClasses)
         
        if(exactMatches === 4){
            alert("You won!!!")
        } else{
            props.changeRow()
        }
    }

    // generating color circles in a row
    let circles = []
    for (let i = startingId; i < startingId + 4; i++) {
        circles.push(<ColorCircle
                        id={`c-${i}`} 
                        key={i} 
                        class={selectionArr[i - startingId]} 
                        selectedRow={selectedRow} 
                        handleClick={handleClick} 
                    />)
    }

    // generating hints circles in a row
    let hints = []
    for (let i = 0; i < 4; i++) {
        hints.push(<span
                        key={i} 
                        className={`hint hint-${hintClasses[i] ? hintClasses[i] : 'null'}`}
                    ></span>)
        
    }

    return (
        <div className={`row ${selectedRow ? 'selected-row' : null}`}>
            <div className="circles">
                {circles}
            </div>

            <button
                className={`submit ${!selectionArr.includes(-1) ? 'display' : null}`}
                onClick={handleSubmit}
                disabled={!selectedRow}
            ></button>

            <div className="hints">
                {hints}
            </div>
        </div>
    )
}

export default Row
