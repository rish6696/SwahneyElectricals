import React from 'react';
import Constant from '../Contsants';
import BootStrapContainer from '../Components/bootStrapContainer'
import Heading from '../Components/heading'
import '../css/grid.css';
import { Form,Col,Button }  from 'react-bootstrap'; 


class BatteryContainer extends React.Component {
    
    render(){
        
        return (
          <BootStrapContainer>
            <div className='row' style={{margin:'15px' , borderBottom:'0.5px solid grey'}} > 
               <Heading heading ="Battery Finder" ></Heading>
            </div>

            <div className='row' style={{margin:'15px' }}  >
            
  
  <Form.Group className='col-12 col-sm-6 col-lg-3' controlId="exampleForm.SelectCustom">
    <Form.Label style={{fontWeight :'bold' }} >Product Type *:</Form.Label>
    <Form.Control as="select" custom>
      <option>Select product type</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group className='col-12 col-sm-6 col-lg-3' controlId="exampleForm.SelectCustom">
    <Form.Label style={{fontWeight :'bold' }} >Make *:</Form.Label>
    <Form.Control as="select" custom>
      <option>Select Make</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>


  <Form.Group className='col-12 col-sm-6 col-lg-3' controlId="exampleForm.SelectCustom">
    <Form.Label style={{fontWeight :'bold' }} >Fuel Type *:</Form.Label>
    <Form.Control as="select" custom>
      <option>Select fuel type</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>


  <Form.Group className='col-12 col-sm-6 col-lg-3' controlId="exampleForm.SelectCustom">
    <Form.Label style={{fontWeight :'bold' }} >Model *:</Form.Label>
    <Form.Control as="select" custom>
      <option>Select model</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>


  <Form.Group className='col-12 col-sm-6 col-lg-3' controlId="exampleForm.SelectCustom">
    <Form.Label style={{fontWeight :'bold' }} >Brand *:</Form.Label>
    <Form.Control as="select" custom>
      <option>Select Brand</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

            </div>

            <Button variant="primary"  style={{marginLeft:'25px'}} type="submit">
                Submit
            </Button>
          </BootStrapContainer>
        )
    }

}



export default BatteryContainer;