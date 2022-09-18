import Header from "../components/Header";
import How from "../components/How";
import LoginPage from "../components/LoginPage";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="Login">
        <How />
        <LoginPage />
      </div>
    </div>
  );
};

export default Login;
