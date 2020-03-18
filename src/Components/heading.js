import React from 'react';

import '../css/grid.css';


class Heading extends React.Component {

 
    
    render(){
        const { heading }  = this.props;
        
        return (
        <div className='col'>
            <span style={ { fontSize:'30px'  }} >{heading}</span>
        </div>
          
        )
    }

}



export default Heading;