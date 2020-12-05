import React, {Component} from "react";
import styles from "./LogoFooterMain.module.scss";

class LogoFooterMain extends Component {
  render() {
    return (
      <span className={styles.logoFooter}>
        AppCo
      </span>
    );
  }
}

export default LogoFooterMain