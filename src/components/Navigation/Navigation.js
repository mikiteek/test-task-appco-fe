import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import usersSelector from "../../redux/users/usersSelector";
import routes from "../../routes";
import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    const {user} = this.props;
    const navStyles = [styles.nav, "container"].join(" ");
    const userInfoStyles = [styles.liItemLink, "js-user"].join(" ");
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
          {Object.keys(user).length !== 0 && <li className={styles.liItem}>
            <NavLink
              to={routes.selectedUser}
              className={userInfoStyles}
              activeClassName={styles.liItemLinkActive}
            >
              {user.firstName + " " + user.lastName}
            </NavLink>
          </li>}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: usersSelector.getUserInfo(state)
});

export default connect(mapStateToProps)(Navigation)