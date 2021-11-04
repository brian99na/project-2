import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Header = (props) => {
  const [active, setActive] = useState("false");

  const handleClick = (e) => {
    setActive(!active);
    props.setNavbarClickable(!props.navbarClickable)
  };

  console.log(active);

  const navbarGray = props.navbarClickable ? null : 'navbarGray'
  const blurClass = `mainVisible headTitle ${navbarGray}`

  const checkVis = active ? null : "iconRotate";
  const checkHid2 = active ? null : 'navdrop';

  const classVis = `icon visible ${checkVis}`;
  const checkHidNav = `hidden ${checkHid2}`;

  return (
    <nav className="navUpper">
      <Link to="/project-2">
        <h1 className={blurClass}>What if?</h1>
      </Link>
      <HiTrendingDown onClick={handleClick} className={classVis}/>
      <div className={checkHidNav}>
        <Link to="/project-2/Crypto-Details">
          <p className='regularFont navFont' onClick={handleClick}>Crypto Calculator</p>
        </Link>
        <Link to="/project-2/Inflation-Calculator">
          <p className='regularFont navFont' onClick={handleClick}>Inflation Calculator</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
