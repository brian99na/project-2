import './App.css';
import inflation from 'us-inflation'
import { useEffect } from 'react';

function App() {

  const current = inflation({ year: 2016, amount: 1000 })
  console.log(`$1000 in 2016 is worth $${current} in 2021`)

  useEffect(() => {
    fetch('https://api.polygon.io/v3/reference/tickers?ticker=spy&date=2021-02-25&active=true&sort=ticker&order=asc&limit=10&apiKey=U9EKBFMVPhXgdW2I4JEhsqnqarn3rpcb')
    .then(response => response.json())
    .then(data => console.log(data),console.log('hello'))
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
