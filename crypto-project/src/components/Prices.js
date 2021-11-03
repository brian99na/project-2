function Prices(props) {
    

    return (
        <div className='pricesMain' ref={props.pageRef} >
            <img className="pricesVid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt="btc"/>
            <div className='prices'>
                <h1 className='regularFont pricesTitle' >Your investment is now worth:</h1>
                <h1 >${props.results.priceNow}</h1>
                <h2 className='regularFont'>That's a change of</h2>
                <h1>{props.results.percentChange}%</h1>
            </div>
        </div>
    )
}

export default Prices;
