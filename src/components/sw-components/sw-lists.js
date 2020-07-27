import ItemList from './../ItemList/ItemList';
import withData from './../hoc-helpers/WithData';
import api from '../../services/swapi-service';
const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = api

const PersonList = withData(ItemList, getAllPeople);

const StarshipList = withData(ItemList, getAllStarships);

const PlanetList = withData(ItemList, getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList
}