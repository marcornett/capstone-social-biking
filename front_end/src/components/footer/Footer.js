import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

export const FooterPage = () => {
  return (
    <div className="font-small pt-4 mt-4 main-footer">
      <Container fluid className="text-center text-md-center">
        <Row>
         
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
         Copyright &copy; {new Date().getFullYear()} 
        </Container>
      </div>
    </div>
  );
}
