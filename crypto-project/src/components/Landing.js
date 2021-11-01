import React from "react";

function Landing() {
    
  const handleSubmit = () => {};

  return (
    <div>
      <h1>What if you had invested</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="$______"></input>
      </form>
      <h2>into Bitcoin in 2017?</h2>
    </div>
  );
}

export default Landing;
