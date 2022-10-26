import { Button, ToggleButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [active, setActive] = useState(true);
  const [style, setStyle] = useState();
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logged out");
    navigate("/login");
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
    <Navbar bg="light" expand="lg" className="mb-5" sticky="top">
      <Container className="gap-4">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/home"
          className="fs-5 px-3 py-2 border border-dark rounded-3 link"
        >
          Awesome Course
        </NavLink>

        <Nav className="mx-auto gap-3">
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
          <NavLink
            className="px-3 py-2 border border-dark rounded-3 link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/ok"
          >
            Dark Mode
          </NavLink>
        </Nav>
        <Nav className="align-items-center">
          <Link to="/profile">
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
          <Nav className="fw-bold align-items-center">
            {user?.uid ? (
              <>
                <Link to="/profile">
                  {" "}
                  <span className="ms-2 ">{user?.displayName}</span>
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
      </Container>
    </Navbar>
  );
}

export default Header;
