import React, { Component } from 'react';
import api from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';
import './person-details.css';

export default class PersonDetails extends Component {

  state = {
    person: {},
    isLoading: false
  }

  updatePerson(){
    const {personId} = this.props;
    console.log(personId);    
    api.getPerson(personId).then(person=>{
      this.setState({person})
      this.setState({isLoading: false})
    })
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.personId !== this.props.personId){
      console.log(123);  
      this.setState({isLoading: true})
      this.updatePerson()
    }
  }
  render() {
    const {personId} = this.props;
    
    if(!personId){
      return <span>Select person from list</span>
    }   
    const {person: {birthYear, eyeColor, gender, name, id}, isLoading} = this.state
    const content = isLoading ? <Spinner /> :  (
    <>
    <img className="person-image"
    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
  <div className="card-body">
    <h4>{name}</h4>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span className="term">Gender</span>
        <span>{gender}</span>
      </li>
      <li className="list-group-item">
        <span className="term">Birth Year</span>
        <span>{birthYear}</span>
      </li>
      <li className="list-group-item">
        <span className="term">Eye Color</span>
        <span>{eyeColor}</span>
      </li>
    </ul>
  </div>
  </>)
    
    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}
