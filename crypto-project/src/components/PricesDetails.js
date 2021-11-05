import React, { useRef, useState } from "react";

function PricesDetails(props) {
  const [cryptoValue, setCryptoValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [results, setResults] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const focusDropDown = useRef()

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
    setResults(false)
  };

  const handleCryptoChange = (e) => {
      setDropDown(true)
    setCryptoValue(e.target.value);
    setResults(false)

  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
    setResults(false)

  };

  const handleCryptoClick = (e, cryptoItemId, cryptoItemName) => {
    props.setCoin(cryptoItemId);
    setCryptoValue(cryptoItemName);
    setDropDown(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setInputPrice(priceValue);
    props.setDate(dateValue);
    setResults(true);
    resultsJSX && focusDropDown.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
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
      <p className='cryptoElement regularFont'onClick={(e) => handleCryptoClick(e, cryptoItem.id, cryptoItem.name)}>{cryptoItem.name}</p>
    ));

  const resultsJSX = results && (
    <div className='resultsJSX' ref={focusDropDown}>
      <h1 className="regularFont">Your <span className='resultsJSXCoin'>{props.coin}</span> is now worth</h1>
      <h1 className="mediumFont">${props.results.priceNow}</h1>
      <h1 className="regularFont">a change of</h1>
      <h1 className="mediumFont">{props.results.percentChange}%</h1>
    </div>
  );



    const dropDownCSS = dropDown ? 'cryptoDropDownActive' : null
    const dropDownVal = `cryptoDropDown ${dropDownCSS}`

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
        <input
          type="text"
          onChange={handlePriceChange}
          value={priceValue}
          placeholder='$'
        ></input>
        <p className="regularFont">into</p>
        <input
          type="text"
          onChange={handleCryptoChange}
          value={cryptoValue}
          placeholder='Enter Coin'
        ></input>
        <div className={dropDownVal}>{cryptoJSX}</div>
        <button onClick={handleSubmit}>Calculate</button>
      </form>
      {resultsJSX}
    </div>
  );
}

export default PricesDetails;
