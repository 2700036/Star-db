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
    
    />
  );

  const starshipDetails = (
    <StarshipDetails itemId={itemId}>
      <Record field='model' label='Model' />
      <Record field='starshipClass' label='Class' />
      <Record field='length' label='Length' />
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