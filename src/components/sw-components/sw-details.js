import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import ItemList from '../ItemList/ItemList';
import api from '../../services/swapi-service';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = api


const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails 
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}    
    >
      <Record field='gender' label='Gender' />
      <Record field='birthYear' label='Birth Year' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  )
}

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails 
    itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}    
    >
      <Record field='model' label='Model' />
      <Record field='costInCredits' label='Cost' />
      <Record field='length' label='Length' />
    </ItemDetails>
  )
}

const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails 
    itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}    
    >
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation' />
      <Record field='diameter' label='Diameter' />
    </ItemDetails>
  )
}

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
}