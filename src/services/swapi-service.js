class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource(url) {
    return fetch(`${this._apiBase}${url}`)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch(err => console.log(`Добавление карточки: ${err}`));
  }

  getAllPeople() {
    return this.getResource(`/people/`)
    .then(res=>{
      return res.results
    })    
  }  
  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }
  getAllPlanets() {
    return this.getResource(`/planets/`)
    .then(res=>{
      return res.results
    })
  }
  getPlanet(id) {
    return this.getResource(`/planets/${id}/`)
  }
  getAllStarships() {
    return this.getResource(`/starships/`)
    .then(res=>{
      return res.results
    })    
  }
  getStarship(id) {
    return this.getResource(`/starships/${id}/`)
  }  
}
const api = new SwapiService();

export default api;

