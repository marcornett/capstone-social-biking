// Potential export similar navigation setup from Kwitter
import React from "react"
import { Form,Col,Image, Button, FormControl} from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap"
import cyclelogo2 from "../../assets/cyclelogo2.png"
import "./navigation.css"

function Navigation(){
  return(
    <React.Fragment>
    <ReactBootstrap.Navbar className="nav-bar"  expand="lg">
      <Col xs={6} md={4}>
      <Image src={cyclelogo2} alt="logo" roundedCircle />
    </Col>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
        
        </ReactBootstrap.Nav>
        <Form inline>
        <ReactBootstrap.Nav.Link className="nav-links" href="#home">Sign in</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link className="nav-links" href="#link">Register</ReactBootstrap.Nav.Link>
        </Form>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
    </React.Fragment>
  );
}

export default Navigation;