import React from 'react';
import './item-list.css';

const ItemList = ({onItemSelected, itemRenderer, data}) => {  
  const elements = data.map((item)=>{
      const {name, id} = item;
      return (
        <li className="list-group-item"
        key={name+id}
        onClick={()=>onItemSelected(id)}
        >
          {itemRenderer(item)}
        </li>
      )
    })     
    
    return (
      <ul className="item-list list-group">
        {elements}
      </ul>
    );  
}

export default ItemList
