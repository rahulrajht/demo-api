import React from "react";
import {
  Container,
  Col,
  Navbar,
  Row
} from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Col md={12} xs={8} className='text-center py-3 text-light'>Copyright &copy; 2022 Aviva UK</Col>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
