import React, {Component} from 'react';
import Spinner from '../Spinner/Spinner';

const withDetails = (Wrapped) => {
  
  return class extends Component {
    
    state = {
      item: false,
      image: null,
      isLoading: false
    }
    updateItem(){
      const {itemId} = this.props;     
      this.props.getData(itemId).then(item=>{        
        this.setState({item,
        image: this.props.getImageUrl(item)})
        this.setState({isLoading: false})
      })
    }
    
    componentDidUpdate(prevProps) {
      
      if(prevProps.itemId !== this.props.itemId){    
        this.setState({isLoading: true})
        this.updateItem()
      }
    }

    render(){
      const {item, image, isLoading} = this.state;
      if(!item){
        return <span>Select an item from a list</span>
      }   
      const {name} = item;
      const content = isLoading ? <Spinner /> : (
        <Wrapped {...this.props} image={image} name={name} item={item}/>
      )

      return (
        <div className="person-details card">
          {content}
        </div>
      )
    }
  }
}

export default withDetails