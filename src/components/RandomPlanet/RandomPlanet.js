import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';
import './random-planet.css';
import SwapiContext from '../SwapiContext/SwapiContext';


const RandomPlanet = () => {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const {getPlanet} = useContext(SwapiContext);  
  
  const interval = () => {setInterval(updatePlanet, 5000)}
  const updatePlanet = () => {
    const id = Math.floor(Math.random()*17+2);
    getPlanet(id).then(planet=>{
      setPlanet(planet);
      setLoading(false);
    })
  }

  useEffect(()=>{
    updatePlanet();
    interval();
    return ()=>{
      clearInterval(interval)
    }
  }, []) 
  
  const content = loading ? <Spinner /> : <PlanetCard planet={planet}/>

  return (    
      <div className="random-planet jumbotron rounded">
        {content}
      </div>    
  )  
}

export default RandomPlanet;

const PlanetCard = ({planet: {name, population, rotationPeriod, diameter, imageId}}) => {
  
  return (
    <>
      <img className="planet-image"
            alt={name}
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

PlanetCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    population: PropTypes.string.isRequired, 
    rotationPeriod: PropTypes.string.isRequired, 
    diameter: PropTypes.string.isRequired, 
    imageId: PropTypes.string.isRequired
  })
}