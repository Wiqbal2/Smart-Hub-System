



import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [newDeviceName, setNewDeviceName] = useState('');

  const handleDeviceNameChange = (event) => {
    setNewDeviceName(event.target.value);
  };

  const handleDeviceSubmit = (event) => {
    //event.preventDefault();
    props.addDevice(newDeviceName);
    setNewDeviceName('');
  };

  return (
    <>
      <BootstrapNavbar className="navbar navbar-dark bg-dark" expand="lg">
        {/* HOME BUTTON */}
        <BootstrapNavbar.Brand href="/">Home</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* ROOMS DROPDOWN */}
            <NavDropdown title="Rooms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/" as={Link} to="/Room">
                Kitchen
              </NavDropdown.Item>
              <NavDropdown.Item href="/" as={Link} to="/Room">
                Living-room
              </NavDropdown.Item>
              <NavDropdown.Item href="#">+ add room</NavDropdown.Item>
            </NavDropdown>
            {/* DEVICES DROPDOWN */}
            <NavDropdown title="Devices" id="basic-nav-dropdown">
              {props.devices.map((device) => (
                <NavDropdown.Item key={device} href="/" as={Link} to={`/Device/${device}`}>
                  {device}
                </NavDropdown.Item>
              ))}
              <div>
                <input
                  type="text"
                  placeholder="Enter device name"
                  value={newDeviceName}
                  onChange={handleDeviceNameChange}
                />
                <Button variant="primary" onClick={handleDeviceSubmit}>
                  Add
                </Button>
              </div>
            </NavDropdown>
            {/* GARDEN DROPDOWN */}
            <NavDropdown title="Garden" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Lighting</NavDropdown.Item>
              <NavDropdown.Item href="#">Irrigation</NavDropdown.Item>
            </NavDropdown>
            {/* HISTORY DROPDOWN */}
            <NavDropdown title="History" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">- Fridge 30 F<br />May 9th</NavDropdown.Item>
              <NavDropdown.Item href="#">- Irrigation ON <br />May 9th</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </>
  );
}

export default Navbar;
