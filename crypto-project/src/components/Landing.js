import React, { useEffect, useState } from "react";

function Landing(props) {

    const [value, setValue] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      props.setPrice(value)
      setValue('')
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>What if you had invested</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder="$______" onChange={handleChange}></input>
      </form>
      <h2>into {props.coin} in {props.month} of {props.year}?</h2>
    </div>
  );
}

export default Landing;
