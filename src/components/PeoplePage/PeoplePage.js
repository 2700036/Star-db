import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import Raw from '../Raw/Raw';
import api from '../../services/swapi-service';

const PeoplePage = () => {
  const [personId, setPersonId] = React.useState(null)
  const onPersonselected = (id) =>{
    setPersonId(id)    
    console.log(personId);
  }

  const itemList = (
    <ItemList 
          getData={api.getAllPeople}
          onItemSelected={onPersonselected}
          itemRenderer={item=>`${item.name} (birth year: ${item.birthYear}`}
          />
  );
  const personDetails = (
    <ItemDetails personId={personId}/>
  );

  return (   
    <Raw left={itemList} right={personDetails} />
  );
};

export default PeoplePage;

{/* <ItemList 
          getData={api.getAllPlanets}
          onItemSelected={onPersonselected}
          itemRenderer={item=>`${item.name} | diameter: ${item.diameter} km`}
          />
          <ItemList 
          getData={api.getAllStarships}
          onItemSelected={onPersonselected}
          itemRenderer={item=>`${item.name} | ${item.model}`}
          /> */}