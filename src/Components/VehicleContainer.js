import React from 'react';
import { render } from '@testing-library/react';
import Constant from '../Contsants';
import Vehicle from '../Components/Vehicles'
import BootStrapContainer from '../Components/bootStrapContainer'
import Heading from '../Components/heading'
import '../css/grid.css';


class VehicleContainer extends React.Component {
    
    render(){
        
        return (
          <BootStrapContainer>
            <div className='row' style={{margin:'15px' , borderBottom:'0.5px solid grey'}} > 
               <Heading heading ="Shop By Category" ></Heading>
            </div>

            <div className='row' style={{margin:'10px'}}>
                {Constant.vehicleArray.map((vehicle,idx)=>{
                    if(idx<=3)  return (
                        <Vehicle link={vehicle.link} imgName={vehicle.imgName} ></Vehicle>
                    )
                })}
            </div>

            <div className='row' style={{margin:'10px'}}>
                {Constant.vehicleArray.map((vehicle,idx)=>{
                    if(idx>3)  return (
                        <Vehicle link={vehicle.link} imgName={vehicle.imgName} ></Vehicle>
                    )
                })}
            </div>
          </BootStrapContainer>
        )
    }

}



export default VehicleContainer;