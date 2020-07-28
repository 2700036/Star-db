import React from 'react';

import './person-details.css';

const ItemDetails = ({item, image, name, children}) => {    
    return (
    <>
    <img className="person-image"
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

  export default ItemDetails;


