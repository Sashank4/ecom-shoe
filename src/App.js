import './App.css';
import { useState } from 'react';


import Navbar from './components/navbar';
import Hero from './components/Hero';
function App() {
  const [cartValueFromHero, setCartValueFromHero] = useState('')

  const receiveDataFromHero = (data) => {
    setCartValueFromHero(data);
  };

  return (
    <div className="App">
      <Navbar cartValue={cartValueFromHero}/>
      <Hero sendcartValue={receiveDataFromHero}/>
    
    </div>
  );
}

export default App;
