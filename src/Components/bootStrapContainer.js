import React from 'react';
import '../css/grid.css';


class BootStrapContainer extends React.Component {
    
    render(){
        
        return (
        <div className='container shadow-lg p-3 mb-5 bg-white rounded' >
           {this.props.children}
        </div>
        )
    }

}



export default BootStrapContainer;