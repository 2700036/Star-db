import React from 'react';
import Raw from '../Raw/Raw';
import Record from '../Record/Record';
import { PlanetList } from '../sw-components/sw-lists';
import { PlanetDetails } from '../sw-components/sw-details';


const PlanetPage = () => {
  const [itemId, setItemId] = React.useState(null)
  const onItemSelected = (id) =>{
    setItemId(id)
  }

  const planetList = (
    <PlanetList     
    onItemSelected={onItemSelected}
    itemRenderer={item=>`${item.name} (Population: ${item.population})`}
    />
  );

  const planetDetails = (
    <PlanetDetails itemId={itemId}>
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation' />
      <Record field='diameter' label='Diameter' /> 
    </PlanetDetails>
  );
  
  return (
    <Raw 
      left={planetList} 
      right={planetDetails} 
      />  
  )
}

export default PlanetPage;