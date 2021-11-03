import React from 'react';

function SecondInvestment(props) {
    return (
        <div className='secondInvestment'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt='btc'/>
            <h1 className='regularFont secInvTitle'>What if you had just held that in cash?</h1>
            <h1 className='regularFont'>Due to inflation,</h1>
            <h1 className='regularFont'>your cash has lost</h1>
            <h1 className='regularFont'>of value since {props.year}.</h1>
        </div>
    )
}

export default SecondInvestment
