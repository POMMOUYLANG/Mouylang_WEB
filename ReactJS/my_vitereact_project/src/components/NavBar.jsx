import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="logo reanmore" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="service">Service</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="user">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
