import React from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import './app.css';
import SwapiContext from '../SwapiContext/SwapiContext';
import SwapiService from '../../services/swapi-service';
import PersonPage from '../pages/PersonPage';
import PlanetPage from '../pages/PlanetPage';
import StarshipPage from '../pages/StarShipsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails, PersonDetails, PlanetDetails } from '../sw-components/sw-details';
import Record from '../Record/Record';

const App = () => {
  const swapiService = new SwapiService();

  return (
    <SwapiContext.Provider value={swapiService}>
      <Router>
        <div className='stardb-app'>
          <Header />
          <RandomPlanet />
          <Route
            path='/'
            render={() => <h2 style={{ color: '#0DF6F1' }}>A long time ago in a galaxy far, far away...</h2>}
            exact
          />
          <Route path='/persons' component={PersonPage} exact />
          <Route path='/planets' component={PlanetPage} exact />
          <Route path='/starships' component={StarshipPage} exact />
          <Route path='/starships/:id' render={({ match }) => {
              const id = match.params.id;
              return (
                <StarshipDetails itemId={id}>
                  <Record field='model' label='Model' />
                  <Record field='starshipClass' label='Class' />
                  <Record field='length' label='Length' />
                </StarshipDetails>
              );
            }}
          />
          <Route path='/persons/:id' render={({ match }) => {
              const id = match.params.id;
              return (
                <PersonDetails itemId={id}>
                  <Record field='gender' label='Gender' />
                  <Record field='birthYear' label='Birth Year' />
                  <Record field='eyeColor' label='Eye Color' />
                </PersonDetails>
              );
            }}
          />
          <Route path='/planets/:id' render={
            ({match})=>{
              const id = match.params.id;
              return (
                <PlanetDetails itemId={id}>
                  <Record field='population' label='Population' />
                  <Record field='rotationPeriod' label='Rotation' />
                  <Record field='diameter' label='Diameter' />
                </PlanetDetails>
              )
            }
          }
          />
        </div>
      </Router>
    </SwapiContext.Provider>
  );
};

export default App;
