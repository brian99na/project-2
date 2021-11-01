import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';

function Main() {

    const [price, setPrice] = useState('1000')
    const [date, setDate] = useState('30-03-2016')
    const [coin, setCoin] = useState('bitcoin')
    


    return (
        <div>
            <Route path="/" render={() => <Homepage price={price} setPrice={setPrice} date={date} setDate={setDate} coin={coin} setCoin={setCoin}/>}/>
            <Route path="/About" render={() => <About />}/>
            <Route path="/Contact" render={() => <Contact />}/>
        </div>
    )
}

export default Main;
