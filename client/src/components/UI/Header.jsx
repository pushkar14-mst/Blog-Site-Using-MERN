import { Fragment } from "react";
import NavBar from "./NavBar";
import classes from "./Header.module.css";
const Header = () => {
  const logoStyle = `${classes.logo} text-center`;
  return (
    <Fragment>
      <header>
        <div className={logoStyle}>
          <h1 className={classes.websiteName}>Reader's Bay</h1>
        </div>
        <NavBar />
      </header>
    </Fragment>
  );
};
export default Header;
