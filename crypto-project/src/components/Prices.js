import React, { useRef } from 'react';


function Prices(props) {

    

    return (
        <div className='prices'>
            <h1 ref={props.pageRef}>Your Investment would now be worth:</h1>
        </div>
    )
}

export default Prices
