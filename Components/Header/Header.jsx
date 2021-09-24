import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Avatar/Logo.png";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.auth}>
        <div>
          {props.isAuth ? (
            <div>
              <span>
                {props.login}
                <div>
                  <button onClick={props.logOutThunk}>Logout</button>
                </div>
              </span>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
      <img src={Logo} height="64px" width="64px" />
    </header>
  );
};
export default Header;
