import React, { useState } from "react";

function Landing(props) {

  const handleSubmit = () => {
      setPrice()
  };

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  return (
    <div>
      <h1>What if you had invested</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="$______"></input>
      </form>
      <h2>into {props.coin} in 2017?</h2>
    </div>
  );
}

export default Landing;
