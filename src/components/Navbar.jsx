import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles.css';

function Navbar() {
    return (
        <BootstrapNavbar className="navbar navbar-dark bg-dark" expand="lg">
            {/* HOME BUTTON */}
            <BootstrapNavbar.Brand href="/">Home</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* ROOMS DROPDOWN */}
                    <NavDropdown title="Rooms" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Kitchen</NavDropdown.Item>
                        <NavDropdown.Item href="#">Living-room</NavDropdown.Item>
                        <NavDropdown.Item href="#">+ add room</NavDropdown.Item>
                    </NavDropdown>
                    {/* DEVICES DROPDOWN */}
                    <NavDropdown title="Devices" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Coffee-Maker</NavDropdown.Item>
                        <NavDropdown.Item href="#">Robot Vacuum</NavDropdown.Item>
                        <NavDropdown.Item href="#">Fridge</NavDropdown.Item>
                        <NavDropdown.Item href="#">+ add device</NavDropdown.Item>
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
    );
}

export default Navbar;
