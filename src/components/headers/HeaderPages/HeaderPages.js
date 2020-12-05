import React, {Component} from "react";
import WrapperPagesHeader from "../../wrappers/WrapperPagesHeader";
import LogoHeader from "../../logos/LogoHeader";
import styles from "./HeaderPages.module.scss";

class HeaderPages extends Component {
  render() {
    const headerStyles = [styles.header, "container"].join(" ");
    return (
      <WrapperPagesHeader>
        <footer className={headerStyles}>
          <LogoHeader/>
        </footer>
      </WrapperPagesHeader>
    );
  }
}

export default HeaderPages;