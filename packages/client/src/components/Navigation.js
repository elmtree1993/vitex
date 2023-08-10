import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"

const Navigation = (props) => {
  return (
    <Navbar>
      <Navbar.Brand as="h3">My Navbar</Navbar.Brand>
      <Nav>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/products">All Products</Nav.Link>
      <Nav.Link as={Link} to="/about">About Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

