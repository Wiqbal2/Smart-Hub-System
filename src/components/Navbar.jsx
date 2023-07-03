// import React from 'react';
// import { Navbar as BootstrapNavbar, Nav, NavDropdown} from 'react-bootstrap';
// import '../styles.css';
// import { Link } from 'react-router-dom';
// import Room from './Room'
// import Device from './Device';


// function Navbar() {
//     return (
//         <BootstrapNavbar className="navbar navbar-dark bg-dark" expand="lg">
//             {/* HOME BUTTON */}
//             <BootstrapNavbar.Brand href="/">Home</BootstrapNavbar.Brand>
//             <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//             <BootstrapNavbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     {/* ROOMS DROPDOWN */}
//                     <NavDropdown title="Rooms" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="/" as={Link} to="/Room">Kitchen</NavDropdown.Item>
//                         <NavDropdown.Item href="/" as= {Link} to="/Room">Living-room</NavDropdown.Item>
//                         <NavDropdown.Item href="#">+ add room</NavDropdown.Item>
//                     </NavDropdown>
//                     {/* DEVICES DROPDOWN */}
//                     <NavDropdown title="Devices" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="/" as = {Link} to="/Device/Coffee-Maker">Coffee-Maker</NavDropdown.Item>
//                         <NavDropdown.Item href="/" as = {Link} to="/Device/Robot-Vacuum">Robot Vacuum</NavDropdown.Item>
//                         <NavDropdown.Item href="/" as = {Link} to="/Device/Fridge">Fridge</NavDropdown.Item>
//                         <NavDropdown.Item href= "#">+ add device</NavDropdown.Item>
//                     </NavDropdown>
//                     {/* GARDEN DROPDOWN */}
//                     <NavDropdown title="Garden" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#">Lighting</NavDropdown.Item>
//                         <NavDropdown.Item href="#">Irrigation</NavDropdown.Item>
//                     </NavDropdown>
//                     {/* HISTORY DROPDOWN */}
//                     <NavDropdown title="History" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#">- Fridge 30 F<br />May 9th</NavDropdown.Item>
//                         <NavDropdown.Item href="#">- Irrigation ON <br />May 9th</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//             </BootstrapNavbar.Collapse>
//         </BootstrapNavbar>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar({ devices, addDevice }) {
  const [showAddDeviceModal, setShowAddDeviceModal] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');

  const handleAddDevice = () => {
    setShowAddDeviceModal(true);
  };

  const handleModalClose = () => {
    setShowAddDeviceModal(false);
    setNewDeviceName('');
  };

  const handleDeviceNameChange = (event) => {
    setNewDeviceName(event.target.value);
  };

  const handleDeviceSubmit = (event) => {
    event.preventDefault();
    addDevice(newDeviceName);
    setShowAddDeviceModal(false);
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
              {devices.map((device) => (
                <NavDropdown.Item key={device} href="/" as={Link} to={`/Device/${device}`}>
                  {device}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Item onClick={handleAddDevice}>+ add device</NavDropdown.Item>
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

      {/* Add Device Modal */}
      <Modal show={showAddDeviceModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleDeviceSubmit}>
            <Form.Group controlId="deviceName">
              <Form.Label>Device Name</Form.Label>
              <Form.Control type="text" value={newDeviceName} onChange={handleDeviceNameChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;

