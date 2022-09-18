import logo from "../assets/img/Main Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = () => {
  return (
    <div className="main-container">
      <div className="Input">
        <img src={logo} alt="main-logo" className="logo" />
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className="input-icons"
        />
        <input
          className="input-field"
          type="text"
          placeholder="Search for a game..."
        />

        <p>Search ... ... games</p>
      </div>
    </div>
  );
};

export default Input;
