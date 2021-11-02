import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Homepage from './Homepage';
import SecondInvestmentDetails from './SecondInvestmentDetails';
import PricesDetails from './PricesDetails';

function Main() {

    const [price, setPrice] = useState('1000')
    const [date, setDate] = useState('30-03-2017')
    const [coin, setCoin] = useState('bitcoin')
    const [currentCoinPrice, setCurrentCoinPrice] = useState('')
    const [pastCoinPrice, setPastCoinPrice] = useState('')

    const currentApiCall = () => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)
        .then(res => res.json())
        .then(data => console.log(data[coin].usd))
    }

    const oldApiCall =

    useEffect(() => {
        currentApiCall()
    }, [])

  

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
            <Route path="/PricesDetails" render={() => <PricesDetails  />}/>
            <Route path="/SecondInvestmentDetails" render={() => <SecondInvestmentDetails />}/>
        </div>
    )
}

export default Main;
