import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar  bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Aviva</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll" />
        <Navbar.Collapse  className="justify-content-end" id="navbarScroll">
          <Nav style={{ maxHeight: "100px", width:"70%"}} navbarScroll>           
              <Nav.Link >Home</Nav.Link>
              <Nav.Link href="#explore">Explore</Nav.Link>
              <Nav.Link href="#docs">Docs</Nav.Link>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ms-5"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <Nav>
          <Button className="ms-2" variant="outline-success">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
