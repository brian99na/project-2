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

  // const inflationApiCall = () => {
  //   fetch('http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: {
  //       country: 'united-states',
  //       start: '2012/1/1',
  //       end: '2012/12/1',
  //       amount: '107',
  //       format: true,
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  useEffect(() => {
    currentApiCall();
    oldApiCall();
    const resCalculations = () => {
      const priceNowe = (
        (inputPrice * currentCoinPrice) /
        pastCoinPrice
      ).toFixed(2);
      const percentChange = ((priceNowe / inputPrice) * 100).toFixed(0);
      const priceLocale = Number(priceNowe).toLocaleString();
      const percentLocale = Number(percentChange).toLocaleString();
      setResults({ priceNow: priceLocale, percentChange: percentLocale });
    };
    resCalculations();
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

  // useEffect(() => {
  //   inflationApiCall()
  // }, [inputPrice]);

  return (
    <div>
      <Route
        path="/project-2" exact
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
          />
        )}
      />
      <Route path="/project-2/CryptoDetails" exact render={() => <PricesDetails />} />
      <Route
        path="/project-2/SecondInvestmentDetails" exact
        render={() => <SecondInvestmentDetails />}
      />
    </div>
  );
}

export default Main;
