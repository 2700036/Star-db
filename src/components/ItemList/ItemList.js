import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = ({onItemSelected, data}) => {  
  const elements = data.map((item)=>{
      const {name, id} = item;
      return (
        <li className="list-group-item"
        key={name+id}
        onClick={()=>onItemSelected(id)}
        >
          {name}
        </li>
      )
    })     
    
    return (
      <ul className="item-list list-group">
        {elements}
      </ul>
    );  
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default ItemList


