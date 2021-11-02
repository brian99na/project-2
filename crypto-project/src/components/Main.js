import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import SecondInvestmentDetails from './SecondInvestmentDetails';

function Main() {

    const [price, setPrice] = useState('1000')
    const [date, setDate] = useState('30-03-2017')
    const [coin, setCoin] = useState('bitcoin')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
  
    useEffect(() => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const monthNum = Number(date.slice(3,5)) - 1
        const yearNum = date.slice(6,10)
        setMonth(months[monthNum])
        setYear(yearNum)
    }, [date])


    return (
        <div>
            <Route path="/" render={() => <Homepage price={price} setPrice={setPrice} date={date} setDate={setDate} coin={coin} setCoin={setCoin} month={month} year={year}/>}/>
            <Route path="/About" render={() => <About />}/>
            <Route path="/Contact" render={() => <Contact />}/>
            <Route path="/PricesDetails" render={() => <Contact />}/>
            <Route path="/SecondInvestmentDetails" render={() => <SecondInvestmentDetails />}/>
        </div>
    )
}

export default Main;
