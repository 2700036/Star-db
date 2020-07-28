import ItemList from './../ItemList/ItemList';
import withData from './../hoc-helpers/WithData';

import withSwapiService from '../hoc-helpers/WithSwapiServise';

const mapPersonMethodsToProps = (swapiService) =>{
  return {
    getData: swapiService.getAllPeople
  }
}
const mapStarshipMethodsToProps = (swapiService) =>{
  return {
    getData: swapiService.getAllStarships
  }
}
const mapPlanetMethodsToProps = (swapiService) =>{
  return {
    getData: swapiService.getAllPlanets
  }
}

const PersonList = withSwapiService(withData(ItemList), mapPersonMethodsToProps);

const StarshipList = withSwapiService(withData(ItemList), mapStarshipMethodsToProps);

const PlanetList = withSwapiService(withData(ItemList), mapPlanetMethodsToProps);

export {
  PersonList, 
  StarshipList,
  PlanetList
}
