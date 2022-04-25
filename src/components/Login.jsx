import { useState, useEffect } from "react";
import axios from "axios";

import { useAppDispatch } from "@redux/hooks";
import { login } from "@redux/authSlice";
import { Button, Modal } from "react-bootstrap";

const Login = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  useEffect(() => {
    if (username && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [username, password]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleLogin(e) {
    e.preventDefault();
    /**
     *  Setting a user that is accepted by the API
     *  just for fake login flow
     */
    const userData = {
      username: "mor_2314",
      password: "83r5^_",
    };

    try {
      const resLogin = await axios.post(
        "https://fakestoreapi.com/auth/login",
        userData
      );
      const isLogin = resLogin.data ? true : false;
      dispatch(login({ isAuthenticated: isLogin }));
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
    }
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <span className="fa fa-sign-in me-1" />
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="loginInputPassword"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2">
              <Button
                type="submit"
                variant="outline-primary"
                size="lg"
                disabled={disable}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
