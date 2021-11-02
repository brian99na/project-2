import React, { useRef } from 'react'
import Prices from './Prices';
import SecondInvestment from './SecondInvestment';
import Landing from './Landing';

function Homepage(props) {

    const pageRef = useRef()

    return (
        <div>
            <section>
                <Landing pageRef={pageRef} price={props.price} setPrice={props.setPrice} coin={props.coin} year={props.year} month={props.month}/>
            </section>
            <section>
                <Prices pageRef={pageRef} price={props.price}/>
            </section>
            <section>
                <SecondInvestment/>
            </section>
        </div>
    )
}

export default Homepage
