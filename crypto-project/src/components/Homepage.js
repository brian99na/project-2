import React from 'react'
import Prices from './Prices';
import SecondInvestment from './SecondInvestment';
import Landing from './Landing';


function Homepage() {

    return (
        <div>
            <section>
                <Landing/>
            </section>
            <section>
                <Prices/>
            </section>
            <section>
                <SecondInvestment/>
            </section>
        </div>
    )
}

export default Homepage
