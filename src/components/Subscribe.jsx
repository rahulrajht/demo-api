import React from "react";
import {
  Container,
  Col,
  Navbar,
  Row,
  Button,
  Form,
  FormCheck,
} from "react-bootstrap";
function Subscribe() {
  return (
    <footer>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Row>
            <Col md={6} xs={8} sm={4} className=" py-3 text-light mt-5">
              <h3>Curious about what’s next</h3>
              <p>
                Subscribe to our newsletter to keep up with updates, events and
                more.
              </p>
            </Col>
            <Col className="py-3 text-light mt-5">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Email address"
                  className="me-2 ms-5"
                  aria-label="Search"
                />
                <Button variant="outline-success">Subscribe</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Subscribe;
