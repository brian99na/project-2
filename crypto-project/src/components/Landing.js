import React, { useEffect, useState, useRef } from "react";

function Landing(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setInputPrice(value);
    setValue("");
    props.pageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='landing'>
      <h1 className='regularFont'>What if you invested</h1>
      <form onSubmit={handleSubmit}>
        <p>$</p>
        <input
          className="landingInput"
          value={value}
          type="text"
          onChange={handleChange}
        ></input>
      </form>
      <h2 className='regularFont'>
        into Bitcoin in {props.year}?
      </h2>
    </div>
  );
}

export default Landing;
