import React, { useEffect, useState, useRef } from "react";

function Landing(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setInputPrice(value);
    setValue("");
    props.pageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='landing'>
      <h1>What if you had invested</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="$______"
          onChange={handleChange}
        ></input>
      </form>
      <h2>
        into {props.coin} in {props.month} of {props.year}?
      </h2>
    </div>
  );
}

export default Landing;
