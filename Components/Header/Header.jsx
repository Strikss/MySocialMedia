import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.auth}>
        <div>
          {props.isAuth ? (
            <div>
              {props.login} -<button onClick={props.logOutThunk}>logout</button>
            </div>
          ) : (
            <NavLink to={"/login"}>login</NavLink>
          )}
        </div>
      </div>
      <img
        src="https://www.freelogoservices.com/blog/wp-content/uploads/transparent-logo.jpg"
        height="64px"
        width="64px"
      />
    </header>
  );
};
export default Header;
