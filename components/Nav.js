import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const Navi = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src="https://toppng.com/uploads/preview/mustache-11563112496btuk1vqglh.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Brand bg="dark" href="/">
        Dryw Owens Recording
      </Navbar.Brand>
      <Navbar.Toggle bg="dark" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse bg="dark" id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Credits</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/studio">Studio</Nav.Link>
          <Nav.Link href="/booking">Book Now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
