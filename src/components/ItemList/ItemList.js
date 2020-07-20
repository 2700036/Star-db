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
    const {onItemSelected} = this.props
    return list.map(({id, name})=>{
      return (
        <li className="list-group-item"
        key={name+id}
        onClick={()=>onItemSelected(id)}
        >
          {name}
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
