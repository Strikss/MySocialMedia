import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activelink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activelink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activelink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activelink}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activelink}>
          Settings
        </NavLink>
      </div>
      <div className={classes.Friends}>
        <Friends />
      </div>
    </nav>
  );
};
export default Nav;
