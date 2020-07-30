import React from 'react';
import SwapiContext from '../SwapiContext/SwapiContext';

const withSwapiService = (Wrapped, mapMethodsToProps) => {  
  return (props)=>{
    return (
    <SwapiContext.Consumer>
      { (swapiService)=>{
        const serviceProps = mapMethodsToProps(swapiService)
    return (
      <Wrapped {...props} {...serviceProps}/>
    )
      }
      }
    </SwapiContext.Consumer>
    )
  }
}

export default withSwapiService;