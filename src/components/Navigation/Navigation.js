import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    const navStyles = [styles.nav, "container"].join(" ");
    return (
      <nav className={navStyles}>
        <ul className={styles.navList}>
          <li className={styles.liItem}>
            <NavLink
              exact
              to={routes.main}
              className={styles.liItemLink}
              activeClassName={styles.liItemLinkActive}
            >
              Main page
            </NavLink>
          </li>
          <li className={styles.liItem}>
            <NavLink
              exact
              to={routes.users}
              className={styles.liItemLink}
              activeClassName={styles.liItemLinkActive}
            >
              Users statistics
            </NavLink>
          </li>
          <li className={styles.liItem}>
            <NavLink
              to={routes.selectedUser}
              className={styles.liItemLink}
              activeClassName={styles.liItemLinkActive}
            >
              {"Selected user from redux"}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;