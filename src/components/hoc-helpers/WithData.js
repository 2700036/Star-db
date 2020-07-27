import React, {Component} from 'react';
import Spinner from './../Spinner/Spinner';


const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    }
    
    componentDidMount() {      
      getData().then(items=>{
        this.setState({data: items})
      })
    }
    
    render(){
      const {data} = this.state;
    if (!data){      
      return <Spinner />
    }
      return <View {...this.props} data={data}/>
    }
  }
}

export default withData;
