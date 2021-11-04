import React, { useState } from "react";

function SecondInvestmentDetails(props) {
  const [dateValue, setDateValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  console.log(props.inflationPercentage);

  const inflationLost =
    props.inflationPercentage &&
    (props.inflationPercentage / 100) * props.inputPrice;

  const inflationFixed = Number(inflationLost).toFixed(2);

  const inflationJSX = props.inflationPercentage && (
    <p className="inflationResults">
      You have lost ${inflationFixed} which is a reduction of{" "}
      {props.inflationPercentage}
    </p>
  );

  const handleClick = () => {
    props.setInputPrice(priceValue);
    props.setDate(dateValue);
    setPriceValue("");
    setDateValue("");
  }

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <div className="inflationMain">
      <h1 className="regularFont">Calculate Inflation</h1>
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
        <br />
        <button onClick={handleClick}>Enter</button>
        {inflationJSX}
    </div>
  );
}

export default SecondInvestmentDetails;
