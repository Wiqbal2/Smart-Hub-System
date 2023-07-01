import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../styles.css';
import Temperature  from '../Utilities.js';

function Room() {
  // Call the imported function
  const result = Temperature();

  return (

    <div>
        <Navbar />

        <Temperature /> 


       
      {/* JSX content */}
    </div>
  );
}

export default Room;