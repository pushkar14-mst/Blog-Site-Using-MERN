import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={classes.navigationbar}>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default NavBar;
