import React, { useRef, useState } from "react";

function SecondInvestmentDetails(props) {
  const [dateValue, setDateValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [result, setResult] = useState(false);

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
    props.setInputPrice(priceValue);
    props.setDate(dateValue);
    setPriceValue("");
    setDateValue("");
    setResult(true);
    inflationJSX && inflationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  const inflationLost = (props.inflationPercentage / 100) * props.inputPrice;

  console.log(inflationLost)

  const inflationFixed = inflationLost.toFixed(2);

  const inflationJSX = result && (
    <div className="inflationAlt" ref={inflationRef}>
      <p className="inflationResults regularFont">
        You have lost <span className="mediumFont">${inflationFixed} </span> of
        value which is a reduction of
        <span className="mediumFont"> {props.inflationPercentage}%</span>
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
