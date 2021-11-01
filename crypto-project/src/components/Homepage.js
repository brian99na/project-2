import React from 'react'
import Prices from './Prices';
import SecondInvestment from './SecondInvestment';
import Landing from './Landing';
import { useEffect, useState } from 'react';


function Homepage(props) {

    return (
        <div>
            <section>
                <Landing setPrice={props.setPrice} coin={props.coin} year={props.year} month={props.month}/>
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
