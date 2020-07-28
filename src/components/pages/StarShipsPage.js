import React from 'react';
import Raw from '../Raw/Raw';
import Record from '../Record/Record';
import { StarshipList } from '../sw-components/sw-lists';
import { StarshipDetails } from '../sw-components/sw-details';


const StarshipPage = () => {
  const [itemId, setItemId] = React.useState(null)
  const onItemSelected = (id) =>{
    setItemId(id)
  }

  const starshipList = (
    <StarshipList     
    onItemSelected={onItemSelected}
    itemRenderer={item=>`${item.name} (Population: ${item.population})`}
    />
  );

  const starshipDetails = (
    <StarshipDetails itemId={itemId}>
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation' />
      <Record field='diameter' label='Diameter' /> 
    </StarshipDetails>
  );
  
  return (
    <Raw 
      left={starshipList} 
      right={starshipDetails} 
      />  
  )
}

export default StarshipPage;