import { Link } from "react-router-dom";

function Prices(props) {
    

    return (
        <div className='pricesMain' ref={props.pageRef} >
            <video className="pricesVid" src="https://github.com/brian99na/project_1/blob/main/Compressed/coinflip_VP9.webm?raw=true" type='video/mp4' autoplay/>
            <div className='prices'>
                <h1 className='regularFont secInvTitle' >your investment is now worth</h1>
                <h1 className='mediumFont priceRes'>${props.results.priceNow}</h1>
                <h1 className='regularFont pricesTitle'>that's a change of</h1>
                <h1 className='mediumFont priceRes'>{props.results.percentChange}%</h1>
                <Link to='/project-2/Crypto-Details'>
                    <button className='detailButton'>Try out a different cryptocurrency here</button>
                </Link>
            </div>
        </div>
    )
}

export default Prices;
