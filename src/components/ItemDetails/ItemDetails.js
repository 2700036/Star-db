import React, { Component } from 'react';
import api from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';
import './person-details.css';

export default class ItemDetails extends Component {

  state = {
    item: false,
    isLoading: false
  }

  updatePerson(){
    const {personId} = this.props;
    console.log(personId);    
    api.getPerson(personId).then(item=>{
      this.setState({item})
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
    const {item, isLoading} = this.state;
    
    if(!item){
      return <span>Select an item from a list</span>
    }   
    const {birthYear, eyeColor, gender, name, id} = item
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
