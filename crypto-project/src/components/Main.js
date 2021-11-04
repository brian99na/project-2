import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Homepage from "./Homepage";
import SecondInvestmentDetails from "./SecondInvestmentDetails";
import PricesDetails from "./PricesDetails";

function Main() {
  const [month, setMonth] = useState("March");
  const [year, setYear] = useState("2017");
  const [inputPrice, setInputPrice] = useState("1000");
  const [date, setDate] = useState("30-03-2017");
  const [coin, setCoin] = useState("bitcoin");
  const [currentCoinPrice, setCurrentCoinPrice] = useState("");
  const [pastCoinPrice, setPastCoinPrice] = useState("");
  const [results, setResults] = useState({
    priceNow: "inputPrice",
    percentChange: "0",
  });
  const [inflationData, setInflationData] = useState('')
  const [inflationPercentage, setInflationPercentage] = useState('')

  const currentApiCall = () => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    )
      .then((res) => res.json())
      .then((data) => setCurrentCoinPrice(data[coin].usd));
  };

  const oldApiCall = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}&localization=false`
    )
      .then((res) => res.json())
      .then((data) => setPastCoinPrice(data.market_data.current_price.usd));
  };

  const inflationApiCall = () => {
    fetch("https://data.nasdaq.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=dDi1qzdRACZxKWbNGJRx")
      .then((res) => res.json())
      .then((data) => setInflationData(data.dataset.data));
  };

  const resultCalculations = () => {
    const currentPrice = (
      (inputPrice * currentCoinPrice) /
      pastCoinPrice
    ).toFixed(2);
    const percentChange = ((currentPrice / inputPrice) * 100).toFixed(0);
    const priceLocale = Number(currentPrice).toLocaleString();
    const percentLocale = Number(percentChange).toLocaleString();
    setResults({ priceNow: priceLocale, percentChange: percentLocale });
  };

  const inflationCalculator = () => {
    const indexValue = (12 * (2021 - Number(year))) + (9 - Number(date.slice(3, 5)))
    const percentage = inflationData && (((274.31 - Number(inflationData[indexValue][1]))/Number(inflationData[indexValue][1])) * 100).toFixed(2)
    setInflationPercentage(percentage)
  }

  useEffect(() => {
    currentApiCall();
    oldApiCall();
    inflationApiCall();
    resultCalculations();
    inflationCalculator();
  }, [inputPrice]);

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthNum = Number(date.slice(3, 5)) - 1;
    const yearNum = date.slice(6, 10);
    setMonth(months[monthNum]);
    setYear(yearNum);
  }, [date]);

  return (
    <div>
      <Route
        path="/project-2"
        exact
        render={() => (
          <Homepage
            inputPrice={inputPrice}
            setInputPrice={setInputPrice}
            date={date}
            setDate={setDate}
            coin={coin}
            setCoin={setCoin}
            month={month}
            year={year}
            results={results}
            inflationPercentage={inflationPercentage}
          />
        )}
      />
      <Route
        path="/project-2/CryptoDetails"
        exact
        render={() => <PricesDetails />}
      />
      <Route
        path="/project-2/SecondInvestmentDetails"
        exact
        render={() => <SecondInvestmentDetails />}
      />
    </div>
  );
}

export default Main;
