import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import './random-planet.css';
import withSwapiService from '../hoc-helpers/WithSwapiServise';

const mapPlanetMethodsToProps = (swapiService) =>{
  return {
    getPlanet: swapiService.getPlanet    
  }
}


class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true
  }  
  interval = () => {setInterval(this.updatePlanet, 3000)}

  componentDidMount() {
    this.updatePlanet()
    this.interval();
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17+2);
    this.props.getPlanet(id).then(planet=>{
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

export default withSwapiService(RandomPlanet, mapPlanetMethodsToProps)




const PlanetCard = ({planet: {name, population, rotationPeriod, diameter, imageId}}) => {
  
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

