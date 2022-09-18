import logo from "../assets/img/Main Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <div className="header-btn">
        <input
          type="button"
          value="My collection"
          className="collection"
          onClick={() => navigate("/collection")}
        />

        <input
          type="button"
          value="Login"
          className="login"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Header;
