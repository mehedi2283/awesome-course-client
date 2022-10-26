import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';
import {
    FaGoogle,
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaTwitch,
  } from "react-icons/fa";
import { ButtonGroup } from "react-bootstrap";
import { GoogleAuthProvider } from "firebase/auth";    

const Login = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoodleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(`user`, user);
        navigate(from, { replace: true });
          toast.success("Login Successful");
      })
      .catch((error) => {
        console.error(`error`, error);
      });
  };

  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [red, setRed] = useState('btn-danger');
  
  const { signIn,logOut } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success("Login Successful");
        }
        else{
          logOut()
          toast.error('Verify your email first.')
        }
      })
      .catch((e) => setError(e.message));
  };
  const handleChecked = () => {
    setCheck(!check);
    if(check){
     setRed('btn-danger')
    }
    else{
      setRed('btn-success')
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="border p-4 rounded shadow w-50 mx-auto mb-4  "
    >
      <h2 className="text-center">Login</h2>
      <hr />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="pass"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          className="link"
          onClick={handleChecked}
          type="checkbox"
          label={
            <>
              Accept
            </>
          }
        />
      </Form.Group>

      <Button className={red} disabled={!check} variant="" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger fw-bold">
        <p>{error}</p>
      </Form.Text>
      <p className="link">
        Don't have an account? <Link to="/register">Register</Link> from here.
      </p>
      <div className="text-center">
      <h4 >OR</h4>
      <h5>Login with</h5>
      <ButtonGroup vertical className="shadow w-100 rounded p-2">
        <Button
          onClick={handleGoodleSignIn}
          className="mb-4 rounded"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> <strong>Login with Google</strong>
        </Button>
        <Button variant="outline-secondary" className=" rounded">
          <FaGithub></FaGithub> <strong>Login with GitHub</strong>
        </Button>
      </ButtonGroup>
      </div>
    </Form>
  );
};

export default Login;
