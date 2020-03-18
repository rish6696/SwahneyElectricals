import React from 'react'
import Header from '../src/Components/header'
import Tabs from '../src/Components/tabs'
import MenuDrawer from '../src/Components/menuDrawers'
import VechileCarousel from '../src/Components/vehiclesCarousel'
import NavBar from '../src/Components/navbar'
import VehicleContainer from './Components/VehicleContainer'

import BatteryFinder from './Components/batteryFinder';



import 'bootstrap/dist/css/bootstrap.min.css';
import color from '@material-ui/core/colors/amber'

class Component extends React.Component {
  
    render(){
      return(
        <div>
           <Header></Header>
          <Tabs></Tabs>
          <NavBar></NavBar>
          <VehicleContainer></VehicleContainer>
          <BatteryFinder></BatteryFinder>
        </div>
      )
    }
}


export default Component
