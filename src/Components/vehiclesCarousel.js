import React from 'react';
import {Carousel} from 'react-bootstrap'
import Paper from '@material-ui/core'
import Button from '@material-ui/core'
import Item from '../Components/Item'
import '../css/mediaQueries.css'


function Example(props){
    return (
        <Carousel interval={false}  className="cs" >
            <Carousel.Item>
                <img src={require('../images/vehicles/bike-battery-icon-batterywale.png')} ></img>
            </Carousel.Item>

            <Carousel.Item>
            <img src={require('../images/vehicles/bike-battery-icon-batterywale.png')} ></img>

            </Carousel.Item>
            <img src={require('../images/vehicles/bike-battery-icon-batterywale.png')} ></img>

            <Carousel.Item>
            <img src={require('../images/vehicles/bike-battery-icon-batterywale.png')} ></img>
 
            </Carousel.Item>


         
        </Carousel>
    )

   
}


export default Example;





 
