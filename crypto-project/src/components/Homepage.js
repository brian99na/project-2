import React, { useRef } from 'react'
import Prices from './Prices';
import SecondInvestment from './SecondInvestment';
import Landing from './Landing';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

function Homepage(props) {

    const pageRef = useRef()
    const secInvRef = useRef()

    const handleClick = () => {
        secInvRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }

    return (
        <div className='homepage'>
            <section className='sectionLanding'>
                <Landing pageRef={pageRef} inputPrice={props.inputPrice} setInputPrice={props.setInputPrice} coin={props.coin} year={props.year} month={props.month}/>
            </section>
            <section>
                <Prices pageRef={pageRef} price={props.price} results={props.results}/>
            </section>
            <MdOutlineKeyboardArrowDown className='arrowHome' onClick={handleClick}/>
            <section className='inflationSection'>
                <SecondInvestment secInvRef={secInvRef} year={props.year} inflationPercentage={props.inflationPercentage}/>
            </section>
        </div>
    )
}

export default Homepage
