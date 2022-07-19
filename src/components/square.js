import React from 'react';
import '../App.css'

function Square({val, chooseSquare}) {
    return(
        <div onClick={chooseSquare} className='square'>{val}</div>
    )
}
export default Square;