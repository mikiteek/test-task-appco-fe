import React, {Component} from "react";
import styles from "./LogoHeader.module.scss";

class LogoHeader extends Component {
  render() {
    return (
      <h1 className={styles.logoHeader}>
        AppCo
      </h1>
    );
  }
}

export default LogoHeader;