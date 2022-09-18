import Header from "../components/Header";
import How from "../components/How";
import SignupPage from "../components/SignupPage";

const SignUp = () => {
  return (
    <div className="signup-container">
      <Header />
      <div className="Login">
        <How />
        <SignupPage />
      </div>
    </div>
  );
};

export default SignUp;
