import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../styles.css';
import Temperature  from '../Utilities.js';

class Room extends React.Component {

  constructor(props){
    super(props);
    this.state = {temp: 75};
  }

  handleTempChange = (temp) => {
    this.setState({temp:temp});
    
  }

  render(){

  // Call the imported function
  //const result = Temperature();

  return (

    <div>
        <Navbar />

        <Temperature 
         temp={this.state.temp}
         onTempChange={this.handleTempChange}
        /> 


       
      {/* JSX content */}
    </div>
  );
}
}

export default Room;