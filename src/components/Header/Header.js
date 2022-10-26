import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    toast.success('Successfully logged out')
    navigate('/login')
      
  };
  let activeStyle = {
    textDecoration: "underline",
    textDecorationThickness: "3px",
    fontWeight: "900",
    color: "blue",
  };

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
          <Link to='/profile'>
              {user?.photoURL ? (
                <Image
                  roundedCircle
                  src={user.photoURL}
                  style={{ height: "40px" }}
                ></Image>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
              </Link>
            <Nav className="fw-bold align-items-center">
              {user?.uid ? (
                <>
                 <Link to='/profile'> <span className="ms-2">{user?.displayName}</span></Link>
                  <Button
                    className="ms-4"
                    onClick={handleLogOut}
                    variant="outline-danger"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="ms-3"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="ms-3"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;