import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-right">
      <div className="login-container">
        <h3 className="login-title">Login</h3>
        <div className="input-flex">
          <input type="text" placeholder="Email..." className="input" />
          <input type="text" placeholder="Password..." className="input" />
          <input type="button" className="connexion-btn" value="Connexion" />
          <p className="account-btn" onClick={() => navigate("/signup")}>
            Don't have an account yet ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
