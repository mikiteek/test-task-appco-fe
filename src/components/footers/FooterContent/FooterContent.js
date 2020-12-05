import React, {Component} from "react";
import styles from "./FooterContent.module.scss";

class FooterContent extends Component {
  render() {
    const {LogoComponent} = this.props;
    const footerTagStyles = ["container", styles.footer].join(" ");
    return (
      <footer className={footerTagStyles}>
        <div className={styles.copyright}>
          <LogoComponent/>
          <span className={styles.copyrightItem}>All right reserved by ThemeTags</span>
          <span className={styles.copyrightItem}>Copyright &#169; 2019</span>
        </div>
      </footer>
    );
  }
}

export default FooterContent;