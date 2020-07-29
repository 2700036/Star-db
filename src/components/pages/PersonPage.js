import React from 'react';
import Raw from '../Raw/Raw';
import Record from '../Record/Record';
import { PersonList } from '../sw-components/sw-lists';
import { PersonDetails } from '../sw-components/sw-details';


const PersonPage = () => {
  const [itemId, setItemId] = React.useState(null)
  const onItemSelected = (id) =>{
    setItemId(id)
  }

  const personList = (
    <PersonList     
    onItemSelected={onItemSelected}    
    />
  );

  const personDetails = (
    <PersonDetails itemId={itemId}>
      <Record field='gender' label='Gender' />
       <Record field='birthYear' label='Birth Year' />
       <Record field='eyeColor' label='Eye Color' />
    </PersonDetails>
  );
  
  return (
    <Raw 
      left={personList} 
      right={personDetails} 
      />  
  )
}

export default PersonPage;