import React from 'react';
import PropTypes from 'prop-types';


import './person-details.css';

const ItemDetails = ({item, image, name, children}) => {    
    return (
    <>
    <img className="person-image"
    alt={name}
    src={image} />
  <div className="card-body">
    <h4>{name}</h4>
    <ul className="list-group list-group-flush">
      {
        React.Children.map(children, (child)=>{
          return React.cloneElement(child, {item})
        })
      }
    </ul>
  </div>
  </>
  )    
  }

  ItemDetails.propTypes = {
    item: PropTypes.object.isRequired, 
    image: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired
  }

  export default ItemDetails;


