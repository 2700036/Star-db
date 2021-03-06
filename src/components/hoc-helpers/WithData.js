import React, {Component} from 'react';
import Spinner from './../Spinner/Spinner';


const withData = (View) => {
  return class extends Component {
    state = {
      data: null
    }
    
    componentDidMount() {      
      this.props.getData().then(items=>{
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
