import './App.css';
import inflation from 'us-inflation'
import { useEffect } from 'react';

function App() {

  const current = inflation({ year: 2016, amount: 1000 })
  console.log(`$1000 in 2016 is worth $${current} in 2021`)

  useEffect(() => {
    fetch('https://api.bls.gov/publicAPI/v1/timeseries/data',{
      method: 'POST'
    })
    .then(response => response.json())
    .then(data => console.log(data),console.log('hello'))
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
