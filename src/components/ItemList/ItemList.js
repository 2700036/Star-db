import React, { Component } from 'react';


import './item-list.css';

export default class ItemList extends Component {

  state = {
    ItemList: []
  }
  
  componentDidMount() {
    const {getData} = this.props;
    getData().then(items=>{
      this.setState({ItemList: items})
    })
  }
  renderItem(list){
    const {onItemSelected, itemRenderer} = this.props;
    return list.map((item)=>{
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
  }
  

  render() {
    const {ItemList} = this.state;
    const elements = this.renderItem(ItemList)
    return (
      <ul className="item-list list-group">
        {elements}
      </ul>
    );
  }
}
