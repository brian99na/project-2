import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Homepage from "./Homepage";
import SecondInvestmentDetails from "./SecondInvestmentDetails";
import PricesDetails from "./PricesDetails";

function Main() {
  const [inputPrice, setInputPrice] = useState("1000");
  const [date, setDate] = useState("30-03-2017");
  const [coin, setCoin] = useState("bitcoin");
  const [currentCoinPrice, setCurrentCoinPrice] = useState("");
  const [pastCoinPrice, setPastCoinPrice] = useState("");
  const [results, setResults] = useState({ priceNow: 0, percentChange: 0 });

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



  useEffect(() => {
    currentApiCall();
    oldApiCall();
    const resCalculations = () => {
        const priceNow = ((inputPrice * currentCoinPrice) / pastCoinPrice).toFixed(2);
        const percentChange = ((priceNow / inputPrice) * 100).toFixed(0);
        console.log(percentChange);
        console.log(priceNow);
      };
    resCalculations();
  }, [inputPrice]);

  console.log(inputPrice);

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
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
        path="/"
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
          />
        )}
      />
      <Route path="/PricesDetails" render={() => <PricesDetails />} />
      <Route
        path="/SecondInvestmentDetails"
        render={() => <SecondInvestmentDetails />}
      />
    </div>
  );
}

export default Main;
