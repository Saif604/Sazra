import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/images/mainLogo.svg'
const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const handleToggle = () => setExpand(!expand);
  const handleCollapse = () => setExpand(false);
  return (
    <Wrapper>
      <Navbar expand="md" className="custom-navbar" variant="dark" expanded={expand}>
        <Container>
          {/* Left: SVG Logo */}
          <Navbar.Brand as={NavLink} to="/" >
            {/* Place your SVG logo here */}
            <img src={Logo} alt="logo" className="logo"/>
          </Navbar.Brand>

          {/* Toggle button for small screens */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />

          {/* Links on the right */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-link-custom"
                onClick={handleCollapse}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/dashboard"
                className="nav-link-custom"
                onClick={handleCollapse}
              >
                Tree
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};
export default NavBar;

const Wrapper = styled.div`
  .custom-navbar {
    background-color: var(--thm-body-bg);
  }
  .nav-link-custom {
    color: #fff !important;
    transition: color 0.3s ease;
  }

  .nav-link-custom:hover {
    color: #ff6500 !important;
  }

  .nav-link-custom.active {
    color: #ff6500 !important;
    font-weight: 700;
  }

  .navbar-collapse {
    background-color: var(--thm-body-bg);
  }
  .logo{
    width:50px;
    height:50px;
  }
`;
