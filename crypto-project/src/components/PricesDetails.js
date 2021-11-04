import React, { useState } from 'react'

function PricesDetails(props) {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleCryptoClick = (cryptoItemId) => {
        props.setCoin(cryptoItemId)
        setValue('')
    }

    const cryptoStartCoin = value && props.cryptoList.filter(cryptoItem => cryptoItem.name.match('^' + value))
    const cryptoIncludeCoin = value && props.cryptoList.filter(cryptoItem => cryptoItem.name.match('(?<!^)' + value))
    const combList = cryptoStartCoin.concat(cryptoIncludeCoin)
    const cryptoJSX = combList && combList.map(cryptoItem => <p onClick={() => handleCryptoClick(cryptoItem.id)}>{cryptoItem.name}</p>)

    return (
        <div>
            <h1 className='regularFont'>You invested into</h1>
            <input type='text' onChange={handleChange} value={value}></input>
            <div className='cryptoDropDown'>
                {cryptoJSX}
            </div>
        </div>
    )
}

export default PricesDetails
