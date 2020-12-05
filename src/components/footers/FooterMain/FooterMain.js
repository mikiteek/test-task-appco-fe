import React, {Component} from "react";
import WrapperMainFooter from "../../wrappers/WrapperMainFooter";
import LogoFooterMain from "../../logos/LogoFooterMain";
import FooterContent from "../FooterContent";
import FormSubscribe from "../../FormSubscribe";
import styles from "./FooterMain.module.scss";

class FooterMain extends Component {
  render() {
    return (
      <WrapperMainFooter>
        <footer className="container">
          <FormSubscribe/>
          <div className={styles.content}>
            <FooterContent LogoComponent={LogoFooterMain}/>
          </div>
        </footer>
      </WrapperMainFooter>
    );
  }
}

export default FooterMain;