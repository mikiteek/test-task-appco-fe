import React, {Component} from "react";
import HeaderPages from "../../components/headers/HeaderPages";
import FooterPages from "../../components/footers/FooterPages";
import Navigation from "../../components/Navigation";
import Diagram from "../../components/Diagram";
import {connect} from "react-redux";
import usersActions from "../../redux/users/usersActions";
import navStyles from "../../components/Navigation/Navigation.module.scss";

class SelectedUserPage extends Component {
  componentDidMount() {
    const linkRef = document.querySelector(".js-user");
    linkRef.classList.add(navStyles.liItemLinkActive)
  }

  componentWillUnmount() {
    this.props.onToggleUser({})
  }

  render() {
    return (
      <>
        <HeaderPages/>
        <Navigation/>
        <main className="container">
          <Diagram/>
        </main>
        <FooterPages/>
      </>
    );
  }
}

const mapDispatchToProps = {
  onToggleUser: usersActions.toggleUserInfo,
}

export default connect(null, mapDispatchToProps)(SelectedUserPage);