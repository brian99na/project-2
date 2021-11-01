import React, { useState, useEffect } from 'react'
import Homepage from './Homepage';

function Main() {

    const [price, setPrice] = useState('1000')
    const [date, setDate] = useState('30-03-2016')
    


    return (
        <div>
            <Homepage/>
        </div>
    )
}

export default Main;
