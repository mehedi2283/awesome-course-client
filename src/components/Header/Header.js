import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HiUserCircle } from "react-icons/hi";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className='mb-5' sticky='top'>
      <Container className='gap-4'>
        <NavLink  to='/home'  className='fs-5'><Button variant="outline-dark" >Awesome Course</Button></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="me-auto">
            <NavLink to='/course'><Button variant="outline-dark" >Course</Button></NavLink>
          </Nav>
          <Nav className="align-items-center">
            <NavLink className="ms-3 fs-3 text-black" to='/login'><HiUserCircle></HiUserCircle></NavLink>
            <NavLink className="ms-3" to='/login'><Button variant="outline-dark" >Login</Button></NavLink>
            <NavLink className="ms-3" to='/register'><Button variant="outline-dark" >Register</Button></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;