import React, { useRef, useState } from "react";

function SecondInvestmentDetails(props) {
  const [dateValue, setDateValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [result, setResult] = useState(false);
  const [date, setDate] = useState('')
  const [inflationPercentage, setInflationPercentage] = useState('')
  const [price, setPrice] = useState('')
  const [inflationFixed, setInflationFixed] = useState('')

  const inflationInfo = props.inflationData
  console.log(inflationInfo)

  const inflationCalculator = () => {
    const indexValue = date && (12 * (2021 - Number(date.slice(6, 10)))) + (9 - Number(date.slice(3, 5)))
    const percentage = indexValue && (((274.31 - Number(inflationInfo[indexValue][1]))/Number(inflationInfo[indexValue][1])) * 100).toFixed(2)
    setInflationPercentage(percentage)
    const inflationLost = (inflationPercentage / 100) * price;
    setInflationFixed(inflationLost.toFixed(2))
  }


  const inflationRef = useRef();

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
    setResult(false)
  };

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
    setResult(false)
  };

  const handleClick = () => {
    setPrice(priceValue);
    setDate(dateValue);
    inflationCalculator()
    setResult(true);
    inflationJSX && inflationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };


  const inflationJSX = result && (
    <div className="inflationAlt" ref={inflationRef}>
      <p className="inflationResults regularFont">
        You have lost <span className="mediumFont">${inflationFixed} </span> of
        value which is a reduction of
        <span className="mediumFont"> {inflationPercentage}%</span>
      </p>{" "}
    </div>
  );


  return (
    <div className="inflationUpper">
      <div className="inflationMain">
        <h1 className="regularFont">You held your</h1>
        <input
          value={priceValue}
          onChange={handlePriceChange}
          type="text"
          placeholder="$"
        ></input>
        <h1 className="regularFont">in cash since</h1>
        <input
          value={dateValue}
          onChange={handleDateChange}
          type="text"
          placeholder="DD-MM-YYYY"
        ></input>
        <br />
        <button onClick={handleClick}>Enter</button>
      </div>
      {inflationJSX}
    </div>
  );
}

export default SecondInvestmentDetails;
