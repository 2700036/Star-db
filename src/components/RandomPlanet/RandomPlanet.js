import React, { Component } from 'react';
import api from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';
import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true
  }
  constructor() {
    super();
    this.updatePlanet()
  }

  updatePlanet(){
    const id = Math.floor(Math.random()*18+1);
    api.getPlanet(id).then(planet=>{
      this.setState({planet, loading: false})
    })
  }



  render() {
    const {planet, loading} = this.state;
    const content = loading ? <Spinner /> : <PlanetCard planet={planet}/>
    return (
      
      <div className="random-planet jumbotron rounded">
        {content}
      </div>

    );
  }
}


const PlanetCard = ({planet: {name, population, rotationPeriod, diameter, imageId}}) => {
  console.log(name);
  return (
    <>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${imageId}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div> 
    </>
  );
};

