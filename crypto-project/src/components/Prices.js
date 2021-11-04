import { Link } from "react-router-dom";

function Prices(props) {
    

    return (
        <div className='pricesMain' ref={props.pageRef} >
            <img className="pricesVid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt="btc"/>
            <div className='prices'>
                <h1 className='regularFont pricesTitle' >Your investment is now worth:</h1>
                <h1 className='mediumFont priceRes'>${props.results.priceNow}</h1>
                <h2 className='regularFont pricesTitle'>That's a change of</h2>
                <h1 className='mediumFont priceRes'>{props.results.percentChange}%</h1>
                <Link to='/project-2/Crypto-Details'>
                    <button className='detailButton'>Try out a different cryptocurrency here</button>
                </Link>
            </div>
        </div>
    )
}

export default Prices;
