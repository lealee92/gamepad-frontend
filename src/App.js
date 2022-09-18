import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Results from "./pages/Results";
import SignUp from "./pages/SignUp";
import Collection from "./pages/Collection";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faUser,
  faKey,
  faListAlt,
  faBookmark,
  faMessage,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faEnvelope,
  faMessage,
  faUser,
  faKey,
  faListAlt,
  faBookmark,
  faMagnifyingGlass
);

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">My collection</Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}

export default App;
