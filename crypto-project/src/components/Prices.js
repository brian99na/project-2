function Prices(props) {
    

    return (
        <div className='prices'>
            <h1 ref={props.pageRef}>Your Investment would now be worth:</h1>
            <h1>${props.results.priceNow}</h1>
            <h2>That's a percent change of</h2>
            <h1>{props.results.percentChange}</h1>
        </div>
    )
}

export default Prices;
