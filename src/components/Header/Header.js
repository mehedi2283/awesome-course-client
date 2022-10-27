import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext} from "react";
import toast from "react-hot-toast";
import { Image } from "react-bootstrap";
import { GiSecretBook } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";
import { AuthContext } from './../../context/AuthProvider/AuthProvider';

function Header() {
 
  const navigate = useNavigate();

  const { user, logOut,handleTheme } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logged out");
    navigate("/home");
  };

  let activeStyle = {
    textDecoration: "underline",

    textDecorationColor: "white",
    textDecorationThickness: "3px",
    fontWeight: "700",
    color: "White ",
    backgroundColor: "black",
    borderRadius: "7px",
  };

  //  if(active){
  //   setStyle(activeStyle)
  //  }


   


  return (
    <Navbar bg="light" expand="lg" className="mb-5 sticky-top " >
      <Container className="gap-4">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/home"
          className="fs-5 px-3 py-2 border border-dark rounded-3 link"
        >
         <GiSecretBook></GiSecretBook> Awesome Course
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-centere" />
        <Navbar.Collapse className="justify-content-evenly" id="basic-navbar-nav">

        <Nav className=" justify-content-center mb-2 gap-3  flex-xl-row">
          <div className="d-flex gap-2 row2 ">

          <NavLink
            className="px-3 py-2 border border-dark rounded-3 link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/course"
          >
            Courses
          </NavLink>
          <NavLink
            className="px-3 py-2 border border-dark rounded-3 link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className="px-3 py-2 border border-dark rounded-3 link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/f&q"
          >
            F&Q
          </NavLink>
          </div>
          <div >
      <div className="container">
        <span >☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onClick={()=>handleTheme()} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span >☽</span>
      </div>
    </div>
        </Nav>
        <Nav className="align-items-center gap-2">
          <Link to={`${!user?'/login' :'/profile'}`}>
            {user?.photoURL ? (
              <Image
                roundedCircle
                src={user.photoURL}
                style={{ height: "40px" }}
              ></Image>
            ) : (
              <FaUserCircle className="text-black fs-3"></FaUserCircle>
            )}
          </Link>
          <Nav className="fw-bold align-items-center gap-2">
            {user?.uid ? (
              <>
                <Link to="/profile">
                  
                  <span className="ms-2 fs-5 ">{user?.displayName}</span>
                </Link>
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
                  className="ms-3 px-3 py-2 border border-dark rounded-3 link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ms-3 px-3 py-2 border border-dark rounded-3 link"
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
