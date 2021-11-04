import React, { useState } from "react";

function SecondInvestmentDetails(props) {
  const [dateValue, setDateValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const inflationRate = props.inflationPercentage && props.inflationPercentage;
  const inflationLost = props.inflationPercentage && (props.inflationPercentage * props.inputPrice) - props.inputPrice;
    const inflationJSX = props.inflationPercentage && <p className='inflationResults'>You have lost ${inflationLost} which is a reduction of {inflationRate}</p>
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setInputPrice(priceValue);
    props.setDate(dateValue);
    setPriceValue("");
    setDateValue("");
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <div className="inflationMain">
      <h1 className="regularFont">Calculate Inflation</h1>
      <form onSubmit={handleSubmit}>
        <p className="regularFont">Enter the Date</p>
        <input
          value={dateValue}
          onChange={handleDateChange}
          type="text"
          placeholder="DD-MM-YYYY"
        ></input>
        <p className="regularFont">Enter the Amount</p>
        <span>$</span>
        <input
          value={priceValue}
          onChange={handlePriceChange}
          type="text"
        ></input>
        <br/><button>Enter</button>
        {inflationJSX}
      </form>

    </div>
  );
}

export default SecondInvestmentDetails;
