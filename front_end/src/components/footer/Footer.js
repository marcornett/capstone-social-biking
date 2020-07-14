import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const FooterPage = () => {
  return (
    <div  className="font-small pt-4 mt-4 main-footer">
      <Container fluid className="text-center text-md-center">
        <Row>
         
          <Col md="4">
            <h5 className="title">About</h5>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Impedit vero atque quaerat! Molestias et,<br/> similique, nihil, doloremque maxime unde consequuntur rerum.<br/> architecto commodi debitis id.</p>
            </div>
          </Col>
          <Col md="4">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
              <h6>Phone: <a href="#!">(914)-000-000</a> </h6>
              </li>
              <li className="list-unstyled">
               <h6>Email: <a href="#!">info@lifecycle.com</a></h6>
              </li>
              <li className="list-unstyled">
              <h6>Address: <a href="#!">123 Kings Road,King City.</a></h6>
              </li>
              
            </ul>
          </Col>
          <Col md="4">
            <h5 className="title">Cycling education</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.lifecycle.com"> Lifecycle.com </a>
        </Container>
      </div>
    </div>
  );
}

export default FooterPage;