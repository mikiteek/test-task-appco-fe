import React, {Component} from "react";
import HeaderMain from "../../components/headers/HeaderMain";
import FooterMain from "../../components/footers/FooterMain/FooterMain";
import SectionAbout from "../../components/SectionAbout";

class MainPage extends Component {
  render() {
    return (
      <>
        <HeaderMain/>
        <main>
          <SectionAbout/>
        </main>
        <FooterMain/>
      </>
    );
  }
}

export default MainPage;