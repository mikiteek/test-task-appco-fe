import React, {Component} from "react";
import WrapperPagesFooter from "../../wrappers/WrapperPagesFooter";
import LogoFooterPages from "../../logos/LogoFooterPages";
import FooterContent from "../FooterContent";

class FooterPages extends Component {
  render() {
    return (
      <WrapperPagesFooter>
        <FooterContent LogoComponent={LogoFooterPages}/>
      </WrapperPagesFooter>
    );
  }
}

export default FooterPages;