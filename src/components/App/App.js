import React from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import api from '../../services/swapi-service';

import './app.css';

const App = () => {
  const [personId, setPersonId] = React.useState(null)
  const onPersonselected = (id) =>{
    setPersonId(id)
    
  }
  return (
    <div className='stardb-app'>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
          getData={api.getAllPeople}
          onItemSelected={onPersonselected}
          />
          <ItemList 
          getData={api.getAllPlanets}
          onItemSelected={onPersonselected}
          />
          <ItemList 
          getData={api.getAllStarships}
          onItemSelected={onPersonselected}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={personId}/>
        </div>
      </div>
    </div>
  );
};

export default App;