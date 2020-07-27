import React from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';

import './app.css';

const App = () => {  
  
  return (
    <div className='stardb-app'>
      <Header />
      <RandomPlanet />
      <PeoplePage 
      
      />
      
    </div>
  );
};

export default App;