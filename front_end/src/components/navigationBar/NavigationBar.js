import React from 'react';
import { Form, Col, Image, Nav, Navbar } from 'react-bootstrap';
import cyclelogo3 from "../assets/cyclelogo2.png"
import { SignIn } from '../sign-in'
import { Register } from '../register'
import SetProfileIcon from '../profile-Icon/ProfileIcon'
import './NavigationBar.css';
import { LocateUserPosition } from '../../utils/index'


export const NavigationBar = () => {
  LocateUserPosition()
  return (
    <React.Fragment>
      <Navbar className="nav-bar" expand="lg">
        <Col xs={6} md={4}>
          <Image src={cyclelogo3} alt="logo" />
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Form inline>
            <Nav.Link className="nav-links" href="/">Home</Nav.Link>
            <SignIn />
            <Register />
            <SetProfileIcon />

          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

