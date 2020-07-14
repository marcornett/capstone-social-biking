// Potential export similar navigation setup from Kwitter
import React from 'react';
import { Form, Col, Image, Nav,Navbar, FormControl } from 'react-bootstrap';
// import * as ReactBootstrap from "react-bootstrap"
 import cyclelogo2 from "../assets/cyclelogo2.png" 
import './NavigationBar.css';


export const NavigationBar = () => {
  return(
    <React.Fragment>
    <Navbar className="nav-bar"  expand="lg">
       <Col xs={6} md={4}>
      <Image src={cyclelogo2} alt="logo" roundedCircle />
      <h4 className="brand">Life Cycle</h4>
    </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        
        </Nav>
        <Form inline>
        <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-links" href="#link">Sign in</Nav.Link>
        <Nav.Link className="nav-links" href="#link">Register</Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </React.Fragment>
  );
}

