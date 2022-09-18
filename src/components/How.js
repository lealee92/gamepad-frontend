import Image from "../assets/img/gamepad 2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const How = () => {
  return (
    <div className="container-left">
      <img src={Image} className="gamepad2" />
      <div className="text-container">
        <h3 className="how-title">How it works ? </h3>
        <div className="medium-container">
          <FontAwesomeIcon icon="fa-solid fa-user" className="icon" />
          <p className="medium-text">
            Log in to your free account to be able to get all features of
            Gamepad
          </p>
        </div>
        <div className="medium-container">
          <FontAwesomeIcon icon="fa-solid fa-bookmark" className="icon" />
          <p className="medium-text">Add a game to your collection</p>
        </div>
        <div className="medium-container">
          <FontAwesomeIcon icon="fa-solid fa-message" className="icon" />
          <p className="medium-text">Leave a review for a game</p>
        </div>
      </div>
    </div>
  );
};

export default How;
