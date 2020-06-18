import React from 'react';
import NavBar from './components/NavBar.js';
import FirstPromotion from './components/FirstPromotion.js';
import SecondPromotion from './components/SecondPromotion.js';
import ThirdPromotion from './components/ThirdPromotion.js';
import FourthPromotion from './components/FourthPromotion.js';


function App() {
  return (
    <div>
      <NavBar />
      <FirstPromotion />
      <SecondPromotion />
      <ThirdPromotion />
      <FourthPromotion />
    </div>
   
  );
}

export default App;
