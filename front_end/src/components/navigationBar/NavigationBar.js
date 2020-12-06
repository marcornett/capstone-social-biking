import React from 'react';
import { Form, Col, Image, Nav, Navbar } from 'react-bootstrap';
import cyclelogo3 from "../assets/cyclelogo2.png"
import { SignInContainer } from '../sign-in'
import { RegisterContainer } from '../register'
import SetProfileIconContainer from '../profile-Icon/ProfileIcon'
import { useParams } from 'react-router-dom'
import './NavigationBar.css';
import { LocateUserPosition } from '../../utils/index'


export const NavigationBar = () => {
  const { username } = useParams()

  LocateUserPosition()
  return (
    <React.Fragment>
      <Navbar sticky="top" className="nav-bar" expand="lg">
        <Col xs={6} md={4}>
          <Image src={cyclelogo3} alt="logo" />
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Form inline>
            <Nav.Link className="nav-links" href="/">Home</Nav.Link>
            {username ? null : <SignInContainer />}
            {username ? null : <RegisterContainer />}
            {username ? <SetProfileIconContainer /> : null}

          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

