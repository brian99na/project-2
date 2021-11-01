import React, { useEffect, useState } from "react";

function Landing(props) {

  const handleSubmit = () => {
      setPrice()
  };


  return (
    <div>
      <h1>What if you had invested</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="$______"></input>
      </form>
      <h2>into {props.coin} in {month} of {year}?</h2>
    </div>
  );
}

export default Landing;
