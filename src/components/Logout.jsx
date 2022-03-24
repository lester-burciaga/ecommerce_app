import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import Button from "react-bootstrap/Button";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout(false));
    navigate("/");
  }

  return (
    <>
      <Button type="button" variant="outline-primary" onClick={handleLogout}>
        <span className="fa fa-sign-out me-1"></span>Logout
      </Button>
    </>
  );
};

export default Logout;
