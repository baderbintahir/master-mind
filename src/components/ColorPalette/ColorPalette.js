import React from 'react'
import ColorCircle from '../ColorCircle/ColorCircle'
import './ColorPalette.css'

function ColorPalette() {
    return (
        <div className='color-palette'>
            <ColorCircle className="zero selected"/>
            <ColorCircle className="one"/>
            <ColorCircle className="two"/>
            <ColorCircle className="three"/>
            <ColorCircle className="four"/>
            <ColorCircle className="five"/>
        </div>
    )
}

export default ColorPalette
