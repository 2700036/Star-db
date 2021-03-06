export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource = (url) => { 
    console.log(url);   
    return fetch(`${this._apiBase}${url}`)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch(err => console.log(`Добавление карточки: ${err}`));
  }

  getAllPeople = () => {
    return this.getResource(`/people/`)
    .then(res=>{
      return res.results.map(this._transformPerson)
    })    
  }  
  getPerson = (id) => {
    return this.getResource(`/people/${id}/`)
    .then(person=>this._transformPerson(person))
  }
  getAllPlanets = () => {
    return this.getResource(`/planets/`)
    .then(res=>{
      return res.results.map(this._transformPlanet)
    })
  }
  getPlanet = (id) => {
    return this.getResource(`/planets/${id}/`)
    .then(planet=>this._transformPlanet(planet))
  }
  getAllStarships = () => {
    return this.getResource(`/starships/`)
    .then(res=>{
      return res.results.map(this._transformStarship)
    })    
  }
  getStarship = (id) => {
    return this.getResource(`/starships/${id}/`)
    .then(starship=>this._transformStarship(starship))
  }  
  _transformPlanet(planet){ 
       
    return {
      id: planet.url.match(/\/(\d\d?)\//)[1],
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      imageId: planet.url.match(/\/(\d\d?)\//)[1]  
    }
  }
  _transformStarship(starship){ 
       
    return {
      id: starship.url.match(/\/(\d\d?)\//)[1],
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      starshipClass: starship.starship_class,
      length: starship.length,
      crew: starship.crew,
      passangers: starship.passangers,
      cargoCapacity: starship.cargoCapacity,      
      imageId: starship.url.match(/\/(\d\d?)\//)[1]  
    }
  }
  _transformPerson(person) {
   
    return {
      id: person.url.match(/\/(\d\d?)\//)[1],
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  getPersonImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }
  getStarshipImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }
  getPlanetImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }

}


