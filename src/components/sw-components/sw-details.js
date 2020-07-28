import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import api from '../../services/swapi-service';
import withDetails from '../hoc-helpers/WithDetails';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = api


const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage)

const StarshipDetails = withDetails(ItemDetails, getStarship, getStarshipImage)

const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage)

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
}

      // <Record field='model' label='Model' />
      // <Record field='costInCredits' label='Cost' />
      // <Record field='length' label='Length' />

      // <Record field='population' label='Population' />
      // <Record field='rotationPeriod' label='Rotation' />
      // <Record field='diameter' label='Diameter' /> 