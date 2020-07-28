import React from 'react';
import { SwapiConsumer } from '../SwapiContext/SwapiContext';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props)=>{
    return (
    <SwapiConsumer>
      { (swapiService)=>{
        const serviceProps = mapMethodsToProps(swapiService)
    return (
      <Wrapped {...props} {...serviceProps}/>
    )
      }
      }
    </SwapiConsumer>
    )
  }
}

export default withSwapiService;