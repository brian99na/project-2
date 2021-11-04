import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Header = () => {
  const [active, setActive] = useState("false");

  const handleClick = (e) => {
    setActive(!active);
  };

  console.log(active);

  const checkVis = active ? null : "iconRotate";
  const checkHid2 = active ? "hidden" : 'navdrop';

  const classVis = `icon visible ${checkVis}`;
  const checkHidNav = `${checkHid2}`;

  return (
    <nav className="navUpper">
      <Link to="/project-2">
        <h1 className='headTitle'>What if?</h1>
      </Link>
      <HiTrendingDown onClick={handleClick} className={classVis}/>
      <div className={checkHidNav}>
        <Link to="/project-2/CryptoDetails">
          <p>Crypto Calculator</p>
        </Link>
        <Link to="/project-2/SecondInvestmentDetails">
          <p>Inflation Calculator</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
