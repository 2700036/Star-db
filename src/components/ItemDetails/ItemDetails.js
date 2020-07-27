import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import './person-details.css';

export default class ItemDetails extends Component {

  state = {
    item: false,
    image: null,
    isLoading: false
  }

  updateItem(){
    const {itemId, getData, getImageUrl} = this.props;
    getData(itemId).then(item=>{
      this.setState({item,
      image: getImageUrl(item)})
      this.setState({isLoading: false})
    })
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.itemId !== this.props.itemId){    
      this.setState({isLoading: true})
      this.updateItem()
    }
  }
  render() {
    const {item, image, isLoading} = this.state;
    
    if(!item){
      return <span>Select an item from a list</span>
    }   
    const {name} = item
    const content = isLoading ? <Spinner /> :  (
    <>
    <img className="person-image"
    src={image} />
  <div className="card-body">
    <h4>{name}</h4>
    <ul className="list-group list-group-flush">
      {
        React.Children.map(this.props.children, (child)=>{
          return React.cloneElement(child, {item})
        })
      }
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


{/* <li className="list-group-item">
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
      </li> */}