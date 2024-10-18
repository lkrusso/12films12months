import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="logo">
        <Link to="/">12films12months</Link>
      </div>
      <nav className="navbar">
        <ul className="navbar__items">
          <li className="navbar__text">
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
