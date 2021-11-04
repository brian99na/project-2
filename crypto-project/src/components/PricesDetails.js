import React, { useState } from "react";

function PricesDetails(props) {
  const [cryptoValue, setCryptoValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [results, setResults] = useState(false);
  const [dropDown, setDropDown] = useState(false)

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  const handleCryptoChange = (e) => {
      setDropDown(true)
    setCryptoValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleCryptoClick = (e, cryptoItemId, cryptoItemName) => {
    props.setCoin(cryptoItemId);
    setCryptoValue(cryptoItemName)
    setDropDown(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setInputPrice(priceValue);
    props.setDate(dateValue);
    setDateValue('')
    setCryptoValue('')
    setPriceValue('')
    setResults(true);
  }

  const cryptoStartCoin =
    props.cryptoList &&
    props.cryptoList.filter((cryptoItem) =>
      cryptoItem.name.match("^" + cryptoValue)
    );

  const cryptoIncludeCoin =
    props.cryptoList &&
    props.cryptoList.filter((cryptoItem) =>
      cryptoItem.name.match("(?<!^)" + cryptoValue)
    );

  const combList = cryptoStartCoin.concat(cryptoIncludeCoin);

  const cryptoJSX =
    dropDown &&
    combList.map((cryptoItem) => (
      <p onClick={(e) => handleCryptoClick(e, cryptoItem.id, cryptoItem.name)}>{cryptoItem.name}</p>
    ));

  const resultsJSX = results && (
    <div>
      <h1 className="regularFont">Your {props.coin} is now worth</h1>
      <h1>${props.results.priceNow}</h1>
      <h1>a change of</h1>
      <h1>{props.results.percentChange}%</h1>
    </div>
  );

  console.log(results)

  return (
    <div className='priceDetailMain'>
      <form className='priceDetailForm'onSubmit={handleSubmit}>
        <span className="regularFont priceDetailTitle">On </span>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          onChange={handleDateChange}
          value={dateValue}
        ></input>
        <h1 className="regularFont">You invested</h1>
        <span>$</span>
        <input
          type="text"
          onChange={handlePriceChange}
          value={priceValue}
        ></input>
        <p className="regularFont">into</p>
        <input
          type="text"
          onChange={handleCryptoChange}
          value={cryptoValue}
          placeholder='Enter Coin'
        ></input>
        <div className="cryptoDropDown">{cryptoJSX}</div>
        <button onClick={handleSubmit}>Calculate</button>
      </form>
      {resultsJSX}
    </div>
  );
}

export default PricesDetails;
