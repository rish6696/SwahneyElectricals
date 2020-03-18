import React from 'react';
import {Carousel} from 'react-bootstrap'
import Paper from '@material-ui/core'
import Button from '@material-ui/core'
import Item from '../Components/Item'
import '../css/mediaQueries.css'


function Example(props){
    return (
        <Carousel  interval="950" className="cs" >
        <Carousel.Item className="im">
          <img
            className="d-block w-100"
            src="https://www.batterywale.com/batterywale/images/banners/served_customer.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="im">
          <img
            className="d-block w-100"
            src="https://www.batterywale.com/batterywale/images/banners/batterywalebannerfinal1.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="im"  >
          <img
            className="d-block w-100"
            src="https://www.batterywale.com/batterywale/images/banners/Why-shop-with-batterywale.jpg"
            alt="Third slide"
          />
      
        </Carousel.Item>

        <Carousel.Item className="im"> 
          <img
            className="d-block w-100 "
            src="https://www.batterywale.com/batterywale/images/banners/EMIBanner.png"
            alt="Third slide"
          />
        
        </Carousel.Item>




        <Carousel.Item className="im">
          <img
            className="d-block w-100"
            src="https://www.batterywale.com/batterywale/images/banners/BW_healthcheckupl_2018.png"
            alt="Third slide"
          />
     
        </Carousel.Item>   
      </Carousel>
    )

   
}


export default Example;





 
