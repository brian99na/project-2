import React from 'react';
import { Link } from 'react-router-dom';

function SecondInvestment(props) {


    return (
        <div className='secondInvestment' ref={props.secInvRef}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt='btc'/>
            <div className='inflationHome'>
                <h1 className='regularFont secInvTitle'>What if you held that in cash?</h1>
                <h1 className='regularFont pricesTitle'>Due to inflation, your money has lost</h1>
                <h1 className='inflationPercentage'>{props.inflationPercentage}%</h1>
                <h1 className='regularFont'>of its value since {props.year}.</h1>
                <Link to='/project-2/Inflation-Calculator'>
                    <button className='detailButton'>Try out some different values for inflation</button>
                </Link>
            </div>
        </div>
    )
}

export default SecondInvestment
