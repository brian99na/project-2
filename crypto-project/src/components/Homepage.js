import React from 'react'
import Prices from './Prices';
import SecondInvestment from './SecondInvestment';
import Landing from './Landing';


function Homepage(props) {

    return (
        <div>
            <section>
                <Landing setPrice={props.setPrice} coin={props.coin} date={props.date}/>
            </section>
            <section>
                <Prices price={props.price}/>
            </section>
            <section>
                <SecondInvestment/>
            </section>
        </div>
    )
}

export default Homepage
