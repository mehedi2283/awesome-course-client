import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"; 
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [red, setRed] = useState('btn-danger');
  
  const { signIn,logOut,providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
  const handleGoogleSignIn = () => {
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
  const handleGithubSignIn = () => {
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

  return (
    <Form
      onSubmit={handleSubmit}
      className="border p-4 rounded shadow w-50 mx-auto mb-4 bg-white "
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
              Accept <Link to="/terms">terms and conditons.</Link>
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
      <hr />
      <ButtonGroup vertical className="shadow w-100 rounded p-2">
        <Button
          onClick={handleGoogleSignIn}
          className="mb-4 rounded"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> <strong>Login with Google</strong>
        </Button>
        <Button onClick={handleGithubSignIn} variant="outline-secondary" className=" rounded">
          <FaGithub></FaGithub> <strong>Login with GitHub</strong>
        </Button>
      </ButtonGroup>

    </Form>
  );
};

export default Login;
