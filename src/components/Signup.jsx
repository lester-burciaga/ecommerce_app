import { useState, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import axios from "axios";
import { login } from "../redux/authSlice";
import { Button, Modal } from "react-bootstrap";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = formData;

  // const handleBlur = () => {
  //   if (password1 !== password2) {
  //     setErrorMessage("*Passwords do not match!");
  //     setDisable(true);
  //   } else {
  //     setErrorMessage("");
  //   }
  // };

  useEffect(() => {
    if (username && password1 && password2 && !errorMessage) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    if (password1 !== password2) {
      setErrorMessage("*Passwords do not match!");
      setDisable(true);
    } else {
      setErrorMessage("");
    }
  }, [username, password1, password2, errorMessage]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    /**
     *  Setting a user that is accepted by the API
     *  just for fake login flow
     */
    const userData = {
      email: email,
      username: username,
      password: password1,
      name: {
        firstname: username,
        lastname: "Doe",
      },
      address: {
        city: "Mexico",
        street: "7835 new road",
        number: 0,
        zipcode: "12926",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-520-236-7033",
    };

    try {
      const resRegister = await axios.post(
        "https://fakestoreapi.com/users",
        userData
      );
      const isLogin = resRegister.data ? true : false;
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

  const PasswordWarning = () => {
    return (
      <div id="passwordWarning" className="form-text text-danger">
        {errorMessage}
      </div>
    );
  };

  return (
    <>
      <Button variant="outline-primary ms-2" onClick={handleShow}>
        <span className="fa fa-user-plus me-1" />
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="usernameInput"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="signupInputEmail"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signupInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signupInputPassword1"
                name="password1"
                onChange={handleChange}
              />
              {errorMessage && <PasswordWarning />}
            </div>
            <div className="mb-3">
              <label htmlFor="signupInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signupInputPassword2"
                name="password2"
                onChange={handleChange}
              />
              {errorMessage && <PasswordWarning />}
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

export default Signup;
