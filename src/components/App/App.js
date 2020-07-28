import React from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import './app.css';
import { SwapiProvider } from '../SwapiContext/SwapiContext';
import SwapiService from '../../services/swapi-service';
import PersonPage from '../pages/PersonPage';
import PlanetPage from '../pages/PlanetPage';
import StarshipPage from '../pages/StarShipsPage';


const App = () => {  
  const swapiService = new SwapiService();
  
  
  return (
    <SwapiProvider value={swapiService}>
    <div className='stardb-app'>
      <Header />
      <RandomPlanet />
      <PersonPage />
      <PlanetPage />
      <StarshipPage />
    </div>
    </SwapiProvider>
  );
};

export default App;