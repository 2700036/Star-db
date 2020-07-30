import ItemDetails from '../ItemDetails/ItemDetails';
import withDetails from '../hoc-helpers/WithDetails';
import withSwapiService from '../hoc-helpers/WithSwapiServise';

const mapPersonMethodsToProps = (swapiService) =>{
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}
const mapStarshipMethodsToProps = (swapiService) =>{
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}
const mapPlanetMethodsToProps = (swapiService) =>{
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}




const PersonDetails = withSwapiService(withDetails(ItemDetails), mapPersonMethodsToProps)

const StarshipDetails = withSwapiService(withDetails(ItemDetails), mapStarshipMethodsToProps)

const PlanetDetails = withSwapiService(withDetails(ItemDetails), mapPlanetMethodsToProps)

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
}
