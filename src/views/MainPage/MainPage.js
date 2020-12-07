import React, {Component} from "react";
import {connect} from "react-redux";
import HeaderMain from "../../components/headers/HeaderMain";
import FooterMain from "../../components/footers/FooterMain/FooterMain";
import SectionAbout from "../../components/SectionAbout";
import usersOperations from "../../redux/users/usersOperations";

class MainPage extends Component {
  componentDidMount() {
    this.props.onGetUsers(1, 25);
  }

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

const mapDispatchToProps = {
  onGetUsers: usersOperations.getUsers
}

export default connect(null, mapDispatchToProps)(MainPage);