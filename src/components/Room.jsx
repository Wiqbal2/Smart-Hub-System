import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../styles.css';
import Temperature  from '../Utilities.js';
import { useParams } from "react-router-dom";

let name = "";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Room extends React.Component {

  constructor(props){
    super(props);
    this.state = {temp: 75};

    if(localStorage.getItem( 'temp' ) == null){
      localStorage.setItem( 'temp', parseInt(this.state.temp,10));
    }
  }

  



  handleTempChange = (temp) => {
    this.setState({temp:temp});
    localStorage.setItem( 'temp', 75 );

  }

  render(){

    console.log(name);

  // Call the imported function
  //const result = Temperature();

  return (

    <div>
        <Navbar />

        <Temperature 
         temp={parseInt(localStorage.getItem( 'temp' ),10)}
         onTempChange={this.handleTempChange}
        /> 



      {/* JSX content */}
    </div>
  );
}
}

export default withParams(Room);