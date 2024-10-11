import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  return (
    <Wrapper>
      <Navbar expand="lg" className="mb-3 nav-center">
        <Container fluid>
          <Navbar.Brand href="#"><Logo/></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="modal-open"
            onClick={handleShow}
          />
          <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Sazra
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/" onClick={handleClose}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dashboard" onClick={handleClose}>
                  Dashboard
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Wrapper>
  );
};
export default NavBar;

const Wrapper = styled.div`
background: var(--thm-white);
    .nav-center{
        max-width: var(--max-width);
        margin: 0 auto;
    }
`;
