import React from 'react';
import { render } from '@testing-library/react';


class Vehicle extends React.Component {
    
    render(){
        const { link , imgName } = this.props;
        return (
            <div className='col-12 col-sm-6 col-lg-3' >
            <a  href={link} >
            <img  src={require(`../../src/images/vehicles/${imgName}`)}></img>
            </a>
          </div>
        )
    }

}



export default Vehicle;