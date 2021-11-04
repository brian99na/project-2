import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [navbarClickable, setNavbarClickable] = useState('false')

  return (
    <div className="App">
      <Header navbarClickable={navbarClickable} setNavbarClickable={setNavbarClickable}/>
      <Main navbarClickable={navbarClickable}/>
      <Footer/>
    </div>
  );
}

export default App;
