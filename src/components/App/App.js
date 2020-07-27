import React from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import Raw from '../Raw/Raw';
import { PersonList, PlanetList, StarshipList } from '../sw-components/sw-lists';
import { PersonDetails, StarshipDetails, PlanetDetails } from '../sw-components/sw-details';

import './app.css';

const App = () => {  

  const [personId, setPersonId] = React.useState(null)
  const onPersonselected = (id) =>{
    setPersonId(id) 
  }

  const personList = (
    <PersonList     
    onItemSelected={onPersonselected}
    itemRenderer={item=>`${item.name} (birth year: ${item.birthYear})`}
    />
  );

  const personDetails = (
    <PersonDetails itemId={personId}/>
  );
  
  return (
    <div className='stardb-app'>
      <Header />
      <RandomPlanet />
      <Raw 
      left={personList} 
      right={personDetails} 
      />
      

      
    </div>
  );
};

export default App;