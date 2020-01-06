import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { Nav } from "react-bootstrap"
import { Link } from "@reach/router"

const isActive = ({ isCurrent }) =>
  isCurrent ? { className: "nav-link active" } : null

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">G-Place</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/" getProps={isActive}>
          Home
        </Link>
        <Link className="nav-link" to="/about" getProps={isActive}>
          About
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
