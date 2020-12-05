import React, {Component} from "react";
import WrapperPagesFooter from "../../wrappers/WrapperPagesFooter";
import LogoFooterPages from "../../logos/LogoFooterPages";
import FooterContent from "../FooterContent";
import styles from "./FooterPages.module.scss";

class FooterPages extends Component {
  render() {
    const footerStyles = [styles.footer, "container"].join(" ");
    return (
      <WrapperPagesFooter>
        <footer className={footerStyles}>
          <FooterContent LogoComponent={LogoFooterPages}/>
        </footer>
      </WrapperPagesFooter>
    );
  }
}

export default FooterPages;