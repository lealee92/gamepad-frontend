import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignuPage = () => {
  return (
    <div className="container-right">
      <div className="login-container">
        <h3 className="login-title">Sign Up</h3>
        <div className="input-flex">
          <input type="text" placeholder="Username" className="input" />
          <input type="text" placeholder="Email" className="input" />
          <div className="passwords-btn">
            <input
              type="password"
              placeholder="Password..."
              className="input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
            <div>
              <div className="photo-btn">
                <input type="button" value="Add a Photo" className="input" />
              </div>
            </div>
          </div>
          <input type="button" className="connexion-btn" value="Connexion" />
          <p className="account-btn">Don't have an account yet ?</p>
        </div>
      </div>
    </div>
  );
};

export default SignuPage;
